import { Column, Row } from "@/components/reactdash-ui";
import { NavLink } from "react-router-dom";

export type VendorStatsItemProps = {
  title: string;
  summary: React.ReactNode;
  icon: React.ReactNode;
  url: string;
  className?: string;
  iconClassName?: string;
  summaryClassName?: string;
};

export default function VendorStatsItem(props: VendorStatsItemProps) {
  const addIconClass = props.iconClassName ? props.iconClassName : "";
  const addSummaryClass = props.summaryClassName ? props.summaryClassName : "";

  return (
    <NavLink
      className={`h-full w-full inline-block ${props.className}`}
      to={props.url}
    >
      <Row className="flex-col h-full rounded-lg shadow hover:shadow-lg">
        <Column>
          <div className="h-full bg-white dark:bg-gray-800 rounded-lg p-6 rounded-b-none">
            <div className="flex flex-col gap-4">
              <div
                className={`flex items-center justify-center p-4 h-max w-max self-center rounded-full dark:bg-gray-900 dark:bg-opacity-20 text-center ${addIconClass}`}
              >
                {props.icon}
              </div>
              <h2 className="self-center">{props.title}</h2>
            </div>
          </div>
        </Column>
        <Column className="flex-1">
          <div
            className={`rounded-lg rounded-t-none h-full flex flex-col font-bold justify-center items-center p-6 dark:bg-opacity-20 dark:bg-gray-800 ${addSummaryClass}`}
          >
            {props.summary}
          </div>
        </Column>
      </Row>
    </NavLink>
  );
}
