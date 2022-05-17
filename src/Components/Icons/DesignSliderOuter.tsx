import { IconProps } from ".";

const DesignSliderOuter = ({
  width = 97,
  height = 117,
  className,
  color = "#DABDFF",
  opacity = "0.5",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 97 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M81 117C89.8366 117 97.0558 109.828 96.464 101.012C94.2972 68.7337 85.5891 37.1883 70.8422 8.20309C66.8993 0.453249 57.2512 -2.09496 49.6724 2.16755L8.77373 25.1702C0.947989 29.5716 -1.64838 39.5244 2.14704 47.6614C10.0189 64.5376 14.9631 82.5716 16.7767 101.025C17.641 109.819 24.7234 117 33.5599 117H81Z"
        fill={color}
      />
    </svg>
  );
};

export default DesignSliderOuter;
