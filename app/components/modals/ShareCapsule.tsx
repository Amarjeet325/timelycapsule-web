import { Capsule } from "@/app/_store/capsuleStore";
import Button from "../Button";
import Modal, { type Props as ModalProps } from "../Modal";
import Input from "../form/Input";
import { FormProvider, useForm } from "react-hook-form";
import useClipboard from "@/app/_hooks/useClipboard";

type Props = Omit<ModalProps, "children"> & { capsule: Capsule };

interface FormData {
  email: string;
}

export default function ShareCapsuleModal(props: Props) {
  const { capsule, ...modalProps } = props;

  const { isAvailable, copyText } = useClipboard();

  const capsuleLink =
    window.location.protocol +
    "//" +
    window.location.host +
    `/capsules/${capsule.id}`;

  const form = useForm<FormData>({
    mode: "onChange",
  });

  return (
    <Modal {...modalProps}>
      <FormProvider {...form}>
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h4 className="self-center font-semibold">Share Capsule</h4>
          <div>
            <div>Link (click to copy)</div>
            <div
              onClick={() => isAvailable && copyText(capsuleLink)}
              className="font-semibold text-primary cursor-pointer"
            >
              {capsuleLink}
            </div>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Enter an email address"
            standalone
          />

          <Button
            className="self-center"
            label="Send Capsule Link"
            type="submit"
          />
        </form>
      </FormProvider>
    </Modal>
  );

  function onSubmit(data: FormData) {
    // @TODO : send form to backend
    console.log("share capsule", data);
    modalProps.onCloseClick();
  }
}
