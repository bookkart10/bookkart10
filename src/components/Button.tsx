import { VariantProps, cva } from "class-variance-authority";
export type ButtonProps = VariantProps<typeof buttonStyles>;

export const buttonStyles = cva("px-5 py-2  flex items-center justify-center text-lg shadow-sm rounded-xl", {
  variants: {
    intent: {
      primary:"px-5 py-2 text-lg bg-[#FF6D6D] hover:bg-[#FF7A7A] text-white shadow-sm rounded-md",
      secondary:"px-5 py-2 text-lg border-2 border-[#FF6D6D] bg-[#FDFDFD] hover:bg-[#FFF1F1] text-[#FF6D6D] shadow-sm rounded-md",
      disabled: "bg-gray-300 text-gray-900 hover:cursor-not-allowed",
      
    },
    fullwidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonExtendedProps extends ButtonProps {
  children: string;
}

export default function Button({
  intent,
  fullwidth,
  children,
  ...props
}: ButtonExtendedProps) {
  return (
    <button className={buttonStyles({ intent, fullwidth })} {...props}>
      {children}
    </button>
  );
}