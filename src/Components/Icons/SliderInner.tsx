import { IconProps } from ".";

const SliderInner = ({
  width = 245,
  height = 245,
  className,
  color = "#B57BFF",
  opacity = "0.9",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 245 245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5827 244.715C6.52892 244.715 -0.0452423 238.18 0.434387 230.141C2.05435 202.988 8.19244 176.26 18.6279 151.066C30.9259 121.376 48.9515 94.3992 71.6754 71.6753C94.3992 48.9514 121.376 30.9259 151.067 18.6278C176.26 8.1924 202.988 2.05432 230.141 0.43436C238.18 -0.0452826 244.715 6.52887 244.715 14.5826V65.2409C244.715 73.2946 238.173 79.7566 230.151 80.4679C213.489 81.9453 197.12 85.9522 181.614 92.3751C161.608 100.662 143.431 112.807 128.119 128.119C112.808 143.431 100.662 161.608 92.3752 181.614C85.9522 197.12 81.9454 213.489 80.468 230.151C79.7566 238.173 73.2947 244.715 65.2409 244.715H14.5827Z"
        fill={color}
      />
      <path
        d="M14.5827 244.715C6.52892 244.715 -0.0452423 238.18 0.434387 230.141C2.05435 202.988 8.19244 176.26 18.6279 151.066C30.9259 121.376 48.9515 94.3992 71.6754 71.6753C94.3992 48.9514 121.376 30.9259 151.067 18.6278C176.26 8.1924 202.988 2.05432 230.141 0.43436C238.18 -0.0452826 244.715 6.52887 244.715 14.5826V65.2409C244.715 73.2946 238.173 79.7566 230.151 80.4679C213.489 81.9453 197.12 85.9522 181.614 92.3751C161.608 100.662 143.431 112.807 128.119 128.119C112.808 143.431 100.662 161.608 92.3752 181.614C85.9522 197.12 81.9454 213.489 80.468 230.151C79.7566 238.173 73.2947 244.715 65.2409 244.715H14.5827Z"
        fill="white"
        fillOpacity={opacity}
      />
    </svg>
  );
};

export default SliderInner;
