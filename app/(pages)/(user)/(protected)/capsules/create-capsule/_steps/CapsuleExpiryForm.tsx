import Select from "@/app/components/form/Select";
import DateTimePicker from "@/app/components/form/DatePicker";
import Input from "@/app/components/form/Input";

export default function CapsuleExpiryForm() {
  return (
    <div className="flex flex-col gap-3">
      <Select
        name="type"
        label="Capsule type"
        details="Public or Private"
        options={{
          Public: "public",
          Private: "private",
        }}
      />
      <DateTimePicker name="openDate" label="Accessibility Date" withTime />
      <Input
        type="number"
        name="expiration"
        label="Expiry toggle"
        details="(Capsule will be deleted after X min)"
        toggleable
        suffix={
          <Select
            standalone
            name="expiration-unit"
            optional
            options={{
              Minutes: "minutes",
              Hours: "hours",
              Days: "days",
            }}
          />
        }
      />
    </div>
  );
}
