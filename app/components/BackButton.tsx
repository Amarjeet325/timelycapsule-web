import React from 'react';
import { ArrowLeft } from 'lucide-react';


interface BackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "expired" | "createCapsule";
  showIcon?: boolean;
  text?: string;
}

const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ variant, showIcon = true, text = "Back", className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col items-center"> {/* Container to place label below */}
      <div >   

       
      <button
          ref={ref}
          className={w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-md ${className}}
          aria-label={text}
          type="button"
          {...props}
        >
           <ArrowLeft className="w-10 h-10 text-white" /> 
        </button>
      </div>
        <span className="mt-2 text-xl font-medium text-green-500 underline decoration-2 ">{text}</span> 
      </div>
    );
  }
);

BackButton.displayName = 'BackButton';
export default BackButton;