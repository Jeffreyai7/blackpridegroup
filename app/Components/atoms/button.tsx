import { Clm } from '@/app/lib/utils';
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
  }

const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
    return (
      <>
        <button
          className={Clm(
            "block px-5 text-nowrap text-foreblack bg-foregold text-[.9rem] hover:bg-foreblack hover:text-backgwhite rounded-full transition-all ease-in duration-300",
            className,
            disabled ? "hover:shadow-0" : ""
          )}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </>
    );
  };
  
  export default Button;
  