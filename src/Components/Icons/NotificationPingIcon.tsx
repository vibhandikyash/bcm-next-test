import { IconProps } from ".";

const NotificationPingIcon = ({
  width = 10,
  height = 10,
  color = "#3E66FB",
  className,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="5" r="5" fill={color} />
    </svg>
  );
};

export default NotificationPingIcon;
