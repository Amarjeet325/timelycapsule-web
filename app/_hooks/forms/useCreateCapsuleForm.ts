import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";

export interface CreateCapsuleForm {
  name: string;
  senderName: string;
  deliveryOption: string;

  message?: string;
  funds?: number;
  currency?: string;
  medias?: File[];
  shareLink?: string;
  recipientEmail?: string;
  password?: string;
  type?: string;
  accessibilityDate?: Date;
  expiration?: number;
  expirationUnit?: string;
  "toggle-expiration"?: boolean;
  "toggle-password"?: boolean;
}

const UserSchemaSteps: Array<ZodType<Partial<CreateCapsuleForm>>> = [
  z.object({
    name: z.string().nonempty("You must enter a name"),
    senderName: z.string().nonempty("You must enter a name"),
    message: z.string().optional(),
    funds: z.number().positive("'funds' must be a positive number").optional(),
    currency: z.string().optional(),
    medias: z.array(z.instanceof(File)).optional(),
  }),
  z
    .object({
      type: z.string().optional(),
      accessibilityDate: z.date().optional(),
      expiration: z.number().optional(),
      expirationUnit: z.string().optional(),
      "toggle-expiration": z.boolean().optional().default(false),
    })
    .refine((data) => data["toggle-expiration"] !== true || data.expiration, {
      message: "You must define an expiration",
      path: ["expiration"],
    }),
  z
    .object({
      deliveryOption: z.string().nonempty("You must choose a delivery option"),
      shareLink: z.string().url().optional(),
      recipientEmail: z.string().email().optional(),
      password: z.string().optional(),
      "toggle-password": z.boolean().optional().default(false),
    })
    .refine((data) => data.deliveryOption !== "email" || data.recipientEmail, {
      message: "You must define an email",
      path: ["recipientEmail"],
    })
    .refine((data) => data.deliveryOption !== "link" || data.shareLink, {
      message: "You must generate a link",
      path: ["shareLink"],
    })
    .refine((data) => data["toggle-password"] !== true || data.password, {
      message: "You must define a password",
      path: ["password"],
    }),
];

export default function useCreateCapsuleForm(currentStep: number) {
  const form = useForm<CreateCapsuleForm>({
    mode: "onChange",
    defaultValues: {
      deliveryOption: "link",
      medias: [],
      "toggle-expiration": true,
      currency: "ETH",
      type: "public",
    },
    resolver: zodResolver(UserSchemaSteps[currentStep - 1]),
  });

  return form;
}
