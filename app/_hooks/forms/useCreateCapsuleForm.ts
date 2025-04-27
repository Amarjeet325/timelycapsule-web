import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import { Capsule } from "@/app/_store/capsuleStore";

export interface CreateCapsuleFormData extends Omit<Capsule, "id"> {
  expiration?: number;
  "expiration-unit"?: string;
  geotagging?: string;
  "toggle-expiration"?: boolean;
  "toggle-password"?: boolean;
}

const CapsuleSchemaSteps: Array<ZodType<Partial<CreateCapsuleFormData>>> = [
  z.object({
    collaborationType: z.enum(["single", "collaborators"]),
  }),
  z.object({
    collaborators: z
      .array(z.string().email("Must be a valid email"))
      .optional(),
  }),
  z.object({
    name: z.string().nonempty("You must enter a name"),
    senderName: z.string().nonempty("You must enter a name"),
    message: z.string().optional(),
    funds: z
      .number({ invalid_type_error: "The funds must be a valid number" })
      .positive("'funds' must be a positive number")
      .optional(),
    currency: z.string().optional(),
    medias: z.array(z.instanceof(File)).optional(),
  }),
  z
    .object({
      type: z.string().optional(),
      openDate: z.date().optional(),
      expiration: z.number().optional(),
      "expiration-unit": z.string().optional(),
      "toggle-expiration": z.boolean().optional().default(false),
    })
    .refine((data) => data["toggle-expiration"] !== true || data.expiration, {
      message: "You must define an expiration",
      path: ["expiration"],
    }),
  z
    .object({
      password: z.string().optional(),
      "toggle-password": z.boolean().optional().default(false),
      geotagging: z.string().optional(),
      "toggle-geotagging": z.boolean().optional().default(false),
    })
    .refine((data) => data["toggle-password"] !== true || data.password, {
      message: "You must define a password",
      path: ["password"],
    })
    .refine((data) => data["toggle-geotagging"] !== true || data.geotagging, {
      message: "You must define a geolocation",
      path: ["geotagging"],
    }),
  z.object({}).passthrough(),
];

const PublicCapsuleSchemaSteps = [
  CapsuleSchemaSteps[2],
  CapsuleSchemaSteps[3],
  CapsuleSchemaSteps[4],
  CapsuleSchemaSteps[5],
];

export default function useCreateCapsuleForm(currentStep: number) {
  const form = useForm<CreateCapsuleFormData>({
    mode: "onChange",
    defaultValues: {
      collaborators: [],
      medias: [],
      "toggle-expiration": true,
      currency: "ETH",
      type: "public",
    },
    resolver: zodResolver(CapsuleSchemaSteps[currentStep - 1]),
  });

  return form;
}

export function useCreatePublicCapsuleForm(currentStep: number) {
  const form = useForm<CreateCapsuleFormData>({
    mode: "onChange",
    defaultValues: {
      collaborators: [],
      medias: [],
      "toggle-expiration": true,
      currency: "ETH",
      type: "public",
    },
    resolver: zodResolver(PublicCapsuleSchemaSteps[currentStep - 1]),
  });

  return form;
}

export type CreateCapsuleForm = ReturnType<typeof useCreateCapsuleForm>;
