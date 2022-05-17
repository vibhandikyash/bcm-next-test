import clsx from "clsx";
import { useMemo } from "react";
import { NotificationPingIcon } from "../../Icons";

export interface ListProps {
  text: string;
  status: "Approved" | "Awaiting Approval" | "Not Approved";
  isShowConnectLine?: boolean;
  isLeftAlign?: boolean;
}

const List = ({
  text,
  status = "Not Approved",
  isShowConnectLine = true,
  isLeftAlign = true,
}: ListProps) => {
  const statusColorCode = useMemo(() => {
    switch (status) {
      case "Approved":
        return { code: "#3CC13B", class: "text-green-500" };
      case "Awaiting Approval":
        return { code: "#3E66FB", class: "text-blue-500" };
      case "Not Approved":
        return { code: "#3E66FB", class: "text-blue-300" };
      default:
        return { code: "#3E66FB", class: "text-blue-300" };
    }
  }, [status]);

  return (
    <div>
      <div className="bg-white rounded-lg p-3">
        <div
          className={clsx(
            "mb-4 flex justify-between items-center",
            isLeftAlign ? "flex-row" : "flex-row-reverse"
          )}
        >
          <span className="font-medium text-sm leading-7">{text}</span>
          <NotificationPingIcon
            width={19}
            height={19}
            color={statusColorCode.code}
          />
        </div>
        <div className={clsx(isLeftAlign ? "text-left" : "text-right")}>
          <span
            className={clsx(
              "font-normal text-base leading-6",
              statusColorCode.class
            )}
          >
            {status}
          </span>
        </div>
      </div>
      {isShowConnectLine && (
        <div
          className={clsx(
            "w-full flex",
            isLeftAlign ? "justify-end" : "justify-start"
          )}
        >
          <div
            className={clsx(
              "w-4 h-6 bg-blue-150",
              isLeftAlign ? "mr-3" : "ml-3"
            )}
          />
        </div>
      )}
    </div>
  );
};

export default List;
