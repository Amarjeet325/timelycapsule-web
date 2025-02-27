interface CapsuleStatusCardProps {
  title: string;
  figure: number;
  colour: string;
  textColour: string;
  icon: React.ReactNode;
}

export default function CapsuleStatusCard({
  title,
  figure,
  colour,
  textColour,
  icon,
}: CapsuleStatusCardProps) {
  return (
    <div className="flex items-center gap-3 bg-white shadow-lg rounded-xl px-6 py-5 max-w-[450px] w-full ">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center   "
        style={{
          backgroundColor: colour,
          color: textColour,
        }}
      >
        {icon}
      </div>

      <div>
        <h2 className="text-[#000000] font-bold md:text-base "> {title} </h2>
        <h3 className={` font-bold text-2xl   `} style={{ color: textColour }}>
          {figure}{" "}
        </h3>
      </div>
    </div>
  );
}
