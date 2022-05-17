import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children: any;
  onClick: () => void;
  className?: string;
}

const Button = ({
  type = "button",
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-4 py-3 bg-blue-500 text-white rounded-3xl focus:outline-none",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
