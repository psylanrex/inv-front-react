import { NavLink } from "react-router-dom";

export type PurchaseStatsItemProps = {
  title: string;
  count: string;
  icon: React.ReactNode;
  url: string;
  className?: string;
  iconClassName?: string;
};

export default function PurchaseStatsItem(props: PurchaseStatsItemProps) {
  const addIconClass = props.iconClassName ? props.iconClassName : "";

  return (
    <NavLink
      className={`h-full w-full inline-block ${props.className}`}
      to={props.url}
    >
      <div className="h-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg">
        <div className="flex flex-col gap-4">
          <div
            className={`flex items-center justify-center p-4 h-max w-max self-center rounded-full dark:bg-gray-900 dark:bg-opacity-20 text-center ${addIconClass}`}
          >
            {props.icon}
          </div>
          <p className="text-xl self-center font-semibold">{props.count}</p>
          <h2 className="self-center">{props.title}</h2>
        </div>
      </div>
    </NavLink>
  );
}
