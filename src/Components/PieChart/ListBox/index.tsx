import clsx from "clsx";
import { useMemo } from "react";
import { CompactRoundedListArc } from "../../Icons";
import List, { ListProps } from "./List";

interface ListBoxProps {
  side?: "tr" | "tl" | "br" | "bl";
  listData?: Array<ListProps>;
  className?: string;
}

const ListBox = ({ side = "tl", listData = [], className }: ListBoxProps) => {
  const isLeftAlign = useMemo(() => side === "tl" || side === "bl", [side]);
  const isTopAlign = useMemo(() => side === "tl" || side === "tr", [side]);

  return (
    <div className={clsx("w-56", className)}>
      {isTopAlign && (
        <div
          className={clsx(
            "w-full flex",
            isLeftAlign ? "justify-end" : "justify-start"
          )}
        >
          <CompactRoundedListArc
            className={clsx(side === "tl" ? "mr-0.5" : "ml-1 rotate-90")}
          />
        </div>
      )}
      <div className={clsx("w-48", isLeftAlign ? "float-left" : "float-right")}>
        {isTopAlign && (
          <div
            className={clsx(
              "w-full flex justify-between",
              isLeftAlign ? "flex-row" : "flex-row-reverse"
            )}
          >
            <h6 className="w-32 font-normal text-xs leading-5 text-gray-150">
              Envision, define and document the goals of your BCM program
            </h6>
            <div
              className={clsx(
                "w-4 h-20 bg-blue-150",
                isLeftAlign ? "mr-3" : "ml-3"
              )}
            />
          </div>
        )}

        <div className="flex flex-col">
          {listData.map(({ text, status }: ListProps, index: number) => (
            <List
              key={text}
              text={text}
              status={status}
              isShowConnectLine={!(listData.length === index + 1)}
              isLeftAlign={isLeftAlign}
            />
          ))}
        </div>

        {!isTopAlign && (
          <div
            className={clsx(
              "w-full flex justify-between",
              isLeftAlign ? "flex-row" : "flex-row-reverse"
            )}
          >
            <h6 className="pt-5 w-32 font-normal text-xs leading-5 text-gray-150">
              Envision, define and document the goals of your BCM program
            </h6>
            <div
              className={clsx(
                "w-4 h-20 bg-blue-150",
                isLeftAlign ? "mr-3" : "ml-3"
              )}
            />
          </div>
        )}
      </div>
      {!isTopAlign && (
        <div
          className={clsx(
            "w-full flex",
            isLeftAlign ? "justify-end" : "justify-start"
          )}
        >
          <CompactRoundedListArc
            className={clsx(
              side === "bl" ? "mr-1 -rotate-90" : "ml-0.5 rotate-180"
            )}
          />
        </div>
      )}
    </div>
  );
};

export default ListBox;
