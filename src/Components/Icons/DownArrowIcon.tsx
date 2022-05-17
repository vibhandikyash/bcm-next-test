import { IconProps } from ".";

const DownArrowIcon = ({ width = 14, height = 8, className }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8333 1.08334L7.00001 6.91668L1.16667 1.08334"
        stroke="#3E66FB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrowIcon;
