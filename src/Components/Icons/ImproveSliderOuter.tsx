import { IconProps } from ".";

const ImproveSliderOuter = ({
  width = 200,
  height = 244,
  className,
  color = "#DABDFF",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 194 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0.5C7.16343 0.5 -0.0538733 7.67157 0.516843 16.4897C3.56048 63.5168 19.981 108.849 48.0304 147.15C76.1168 185.501 114.566 215.031 158.782 232.427C166.978 235.651 175.992 231.022 178.733 222.653L192.499 180.625C195.259 172.2 190.604 163.204 182.45 159.724C153.681 147.446 128.669 127.675 110.145 102.381C91.628 77.0973 80.4059 47.4023 77.5205 16.4776C76.6995 7.67925 69.6133 0.5 60.7768 0.5H16Z"
        fill={color}
      />
    </svg>
  );
};

export default ImproveSliderOuter;
