import { X } from "lucide-react";

export interface Props {
  children: React.ReactNode;
  onCloseClick: () => void;
}
export default function Modal({ children, onCloseClick }: Props) {
  return (
    <>
      <div className="absolute inset-0 bg-black/50 z-[400]" />
      <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[500]">
        <div className="bg-white rounded-2xl px-6 py-8 w-[400px]">
          <X className="absolute top-2 right-2" onClick={onCloseClick} />
          {children}
        </div>
      </div>
    </>
  );
}
