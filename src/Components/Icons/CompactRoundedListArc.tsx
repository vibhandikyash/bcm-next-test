import { IconProps } from ".";

const CompactRoundedListArc = ({
  width = 58,
  height = 52,
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 57 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 52.0001C8 22.9996 23 8.00125 56.5001 8.00033"
        stroke="url(#paint0_linear_2_348)"
        strokeWidth="16"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_348"
          x1="56.9999"
          y1="11.9995"
          x2="6.4999"
          y2="77.9995"
          gradientUnits="userSpaceOnUse"
        >
          {/* <stop stopColor="#C2CFFE" /> */}
          <stop offset="1" stopColor="#CFD9FE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CompactRoundedListArc;
