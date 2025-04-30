import useGeolocation from "@/app/_hooks/useGeolocation";
import Input from "@/app/components/form/Input";
import { svgs } from "@/app/components/svgs";
import { useFormContext } from "react-hook-form";

export default function CapsuleDeliveryForm() {
  const { isAvailable, getPosition } = useGeolocation();

  const { setValue } = useFormContext();
  return (
    <div className="flex flex-col gap-3">
      <Input
        type="password"
        name="password"
        label="Password protection"
        optional
        toggleable
        placeholder="Enter password"
      />
      <Input
        type="text"
        name="geotagging"
        label="Geotagging"
        optional
        toggleable
        placeholder="Enter geo location or search"
        suffix={generateGeotaggingPrefix()}
      />
    </div>
  );

  function generateGeotaggingPrefix() {
    if (!isAvailable) {
      return null;
    }

    return (
      <div
        onClick={onFindMe}
        className="flex flex-row gap-1 items-center mr-4 text-primary"
      >
        <span className="underline">Find me</span>
        <svgs.MagnifiyingGlass />
      </div>
    );
  }

  async function onFindMe() {
    const position = await getPosition();

    setValue(
      "geotagging",
      `${position.coords.latitude},${position.coords.longitude}`,
    );
  }
}
