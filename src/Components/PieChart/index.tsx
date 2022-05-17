import { useState } from "react";
import Chart from "./Chart";
import ListBox from "./ListBox";

interface PieChartProps {
  data: { [key: string]: any };
}

const PieChart = ({ data }: PieChartProps) => {
  const { define, design, embed, improve } = data;

  const [hoveredChart, setHoverdChart] = useState("");

  const handleMouseEnter = (type: string) => setHoverdChart(type);
  const handlemouseLeave = () => setHoverdChart("");

  return (
    <div className="mt-8 mb-14 relative">
      <div className="absolute bg-white h-160 w-160 rounded-full left-70 top-6" />
      <div className="flex space-x-4 justify-center">
        <div className="relative">
          {hoveredChart === "define" && (
            <>
              <ListBox
                side="tl"
                listData={define.processData}
                className="absolute -left-64 top-10"
              />
              <div className="absolute top-10 -left-10 w-56 h-4 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500" />
            </>
          )}

          <Chart
            type="define"
            sliderValue={define.sliderValue}
            handleMouseEnter={handleMouseEnter}
            handlemouseLeave={handlemouseLeave}
          />
        </div>
        <div className="relative">
          {hoveredChart === "design" && (
            <>
              <ListBox
                side="tr"
                listData={design.processData}
                className="absolute -right-64 top-10"
              />
              <div className="absolute mt-0.5 top-9 -right-10 w-56 h-4 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100" />
            </>
          )}
          <Chart
            className="rotate-90"
            type="design"
            sliderValue={design.sliderValue}
            handleMouseEnter={handleMouseEnter}
            handlemouseLeave={handlemouseLeave}
          />
        </div>
      </div>
      <div className="flex space-x-4 pt-4 justify-center">
        <div className="relative">
          {hoveredChart === "improve" && (
            <>
              <ListBox
                side="bl"
                listData={embed.processData}
                className="absolute -left-64 bottom-10"
              />
              <div className="absolute mb-0.5 bottom-9 -left-10 w-56 h-4 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500" />
            </>
          )}
          <Chart
            className="-rotate-90"
            type="improve"
            sliderValue={improve.sliderValue}
            handleMouseEnter={handleMouseEnter}
            handlemouseLeave={handlemouseLeave}
          />
        </div>
        <div className="relative">
          {hoveredChart === "embed" && (
            <>
              <ListBox
                side="br"
                listData={improve.processData}
                className="absolute -right-64 bottom-10"
              />
              <div className="absolute bottom-10 -right-10 w-56 h-4 bg-gradient-to-r from-blue-500 via-blue-300 to-blue-100" />
            </>
          )}
          <Chart
            className="rotate-180"
            type="embed"
            sliderValue={embed.sliderValue}
            handleMouseEnter={handleMouseEnter}
            handlemouseLeave={handlemouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
