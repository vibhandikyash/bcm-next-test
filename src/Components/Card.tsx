import clsx from "clsx";
import { CheckIcon } from "./Icons";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  variant?: "primary" | "error";
  isActive?: boolean;
  onClick: () => void;
}

const Card = ({
  imageUrl,
  title,
  description,
  variant = "error",
  isActive = false,
  onClick,
}: CardProps) => {
  const isPrimary = variant === "primary";

  return (
    <div className="w-full xl:w-1/2 bg-white rounded-3xl relative">
      <img
        src={imageUrl}
        alt="card_image"
        className="object-fill w-full h-64 px-4"
      />
      <div className="w-11/12 h-px bg-black" />
      <div className="pt-3 px-6 pb-5">
        <h4
          className={clsx(
            "font-medium text-sm leading-7 ",
            isPrimary ? "text-blue-500" : "text-red-500"
          )}
        >
          {title}
        </h4>
        <p className="w-48 font-normal text-xs leading-5 text-gray-300">
          {description}
        </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <button
          className={clsx(
            "rounded-tl-3xl rounded-br-3xl focus:outline-none hover:shadow-2xl",
            isPrimary
              ? isActive
                ? "p-6 bg-blue-500 hover:shadow-blue-500"
                : "p-8 bg-blue-300 hover:shadow-blue-500"
              : isActive
              ? "p-6 bg-red-500 hover:shadow-red-500"
              : "p-8 bg-red-300 hover:shadow-red-500"
          )}
          onClick={onClick}
        >
          {isActive ? <CheckIcon /> : null}
        </button>
      </div>
    </div>
  );
};

export default Card;
