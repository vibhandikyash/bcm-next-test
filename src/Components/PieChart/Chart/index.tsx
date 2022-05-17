import clsx from "clsx";
import { useState } from "react";
import {
  EllipseIcon,
  GarageIcon,
  HandshakeIcon,
  InteractIcon,
  SettingRotationIcon,
  SliderInner,
  DesignSliderOuter,
  DefineSliderOuter,
  ImproveSliderOuter,
  EmbedSliderOuter,
  DefineText,
  DesignText,
  EmbedText,
  ImproveText,
} from "../../Icons";
import SliderStatusCircle from "../SliderStatusCircle";

const chartTextWrapper: any = {
  define: <DefineText className="absolute bottom-2" />,
  design: <DesignText className="absolute -rotate-90 -top-5 right-10" />,
  embed: <EmbedText className="absolute rotate-180 bottom-2 left-3" />,
  improve: <ImproveText className="absolute rotate-90 -top-5 right-12" />,
};

const icons: any = {
  define: <GarageIcon />,
  design: <SettingRotationIcon className="-rotate-90" />,
  embed: <InteractIcon className="rotate-180" />,
  improve: <HandshakeIcon className="rotate-90" />,
};

const sliderOuterWrapper = {
  define: <DefineSliderOuter className="absolute right-30 bottom-0" />,
  design: <DesignSliderOuter className="absolute -rotate-90 top-20 right-3" />,
  embed: <EmbedSliderOuter className="absolute rotate-180 bottom-0 left-22" />,
  improve: <ImproveSliderOuter className="absolute rotate-90 top-17 right-5" />,
};

const sliderStausCircleWrapper = (type: string, sliderValue: string) => {
  const circles: { [key: string]: any } = {
    define: (
      <SliderStatusCircle
        className="absolute right-26 bottom-28"
        value={sliderValue}
        innerColor="bg-green-500"
        outerColor="bg-green-300"
      />
    ),
    design: (
      <SliderStatusCircle
        className="absolute right-14 bottom-36 -rotate-90"
        value={sliderValue}
      />
    ),
    embed: (
      <SliderStatusCircle
        className="absolute right-26 bottom-27 rotate-180"
        value={sliderValue}
      />
    ),
    improve: (
      <SliderStatusCircle
        className="absolute right-40 bottom-6 rotate-90"
        value={sliderValue}
      />
    ),
  };
  return circles[type];
};

interface ChartProps {
  type: "define" | "design" | "embed" | "improve";
  className?: string;
  sliderValue: string;
  handleMouseEnter: (type: string) => void;
  handlemouseLeave: () => void;
}

const Chart = ({
  className,
  type,
  sliderValue,
  handleMouseEnter,
  handlemouseLeave,
}: ChartProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOnMouseEnter = () => {
    handleMouseEnter(type);
    setIsHovered(true);
  };
  const handleOnMouseLeave = () => {
    handlemouseLeave();
    setIsHovered(false);
  };
  return (
    <div
      className={className}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className="relative w-84 h-84 hover:cursor-pointer hover:-translate-x-5 hover:-translate-y-5 duration-300">
        <div>
          <EllipseIcon
            className="absolute rotate-90"
            opacity={isHovered ? "0" : "0.5"}
          />
          {chartTextWrapper[type]}
        </div>
        <div>
          <div>
            <SliderInner
              className="absolute right-1 bottom-0"
              color={type === "define" ? "#dcfce7" : "#B57BFF"}
            />
            {sliderOuterWrapper[type]}
            {sliderStausCircleWrapper(type, sliderValue)}
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div
            className={clsx(
              "border-13  chart-icon-border",
              isHovered
                ? "bg-blue-300 border-blue-500"
                : "bg-blue-100 border-blue-150"
            )}
          >
            <div className="pr-4 pb-4 pt-12 pl-12">{icons[type]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
