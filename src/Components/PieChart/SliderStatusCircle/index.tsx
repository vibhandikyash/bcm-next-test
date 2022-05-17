import clsx from "clsx";

interface SliderStatusCircleProps {
  className?: string;
  value: string;
  innerColor?: string;
  outerColor?: string;
}

const SliderStatusCircle = ({
  className,
  value,
  innerColor = "bg-purple-500",
  outerColor = "bg-purple-300",
}: SliderStatusCircleProps) => {
  return (
    <div className={className}>
      <div className={clsx("-top-3 h-20 w-20 rounded-full", innerColor)}>
        <div
          className={clsx(
            "relative h-16 w-16 rounded-full top-2 left-2",
            outerColor
          )}
        >
          <div className="absolute font-mono text-white text-sm top-5 left-5">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderStatusCircle;
