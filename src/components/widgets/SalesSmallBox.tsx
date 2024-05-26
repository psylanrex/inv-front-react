import { LightningCharge } from "react-bootstrap-icons";
import {
  Card,
  Tooltip,
  Currency,
  ProgressUpDown,
} from "@/components/reactdash-ui";

export default function SalesSmallBox(props) {
  // progress
  const data_percent = { new: props.data.count, old: props.data.target };
  // colors color
  const colors = {
    primary: "bg-indigo-500",
    secondary: "bg-pink-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-cyan-500",
    light: "bg-gray-300",
    dark: "bg-gray-800",
  };
  const addcolor = props.color ? colors[props.color] : "bg-indigo-500";

  return (
    <Card className="relative overflow-hidden">
      <h3 className="text-base font-bold mb-2">{props.title}</h3>
      <h2 className="text-3xl font-bold mb-4">
        {props.model === "currency" ? (
          <Currency data={props.data.count} />
        ) : (
          props.data.count
        )}
      </h2>

      <div className="flex flex-row justify-between w-full">
        <div className="flex items-center">
          <LightningCharge className="inline-block ltr:mr-1 rtl:ml-1" />
          {props.model === "currency" ? (
            <Currency data={props.data.target} />
          ) : (
            props.data.target
          )}
        </div>
        <div className="relative">
          <Tooltip title="Vs target">
            <ProgressUpDown data={data_percent} />
          </Tooltip>
        </div>
      </div>

      <div className="absolute ltr:-right-16 rtl:-left-16 -top-16">
        <div
          className={`${addcolor} opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10`}
        ></div>
      </div>
      <div className="absolute ltr:-right-4 rtl:-left-4 -top-24">
        <div
          className={`${addcolor} opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10`}
        ></div>
      </div>
    </Card>
  );
}

// Set default props
SalesSmallBox.defaultProps = {
  title: "Default title",
  data: {
    count: 100,
    target: 100,
  },
};
