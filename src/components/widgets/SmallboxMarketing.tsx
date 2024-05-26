import { Progress, Currency } from "@/components/reactdash-ui";

export default function SmallboxMarketing(props) {
  // props
  const data_count = props.data.count;
  const data_target = props.data.target;
  // percent
  const percent = (data_count / data_target) * 100;
  const color_percent =
    percent > 80
      ? "text-green-500"
      : percent > 60
      ? "text-indigo-500"
      : percent > 40
      ? "text-yellow-500"
      : percent > 20
      ? "text-gray-500"
      : "text-red-500";
  const dataType = props.data.type;

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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
      <h3 className="text-base font-bold mb-2">{props.title}</h3>

      <Progress
        percent={percent.toFixed(0)}
        type={props.data.type}
        data={data_count}
        model="circle"
        color={props.color}
      />
      <p className="text-sm text-center font-semibold">
        <span className={`font-bold ${color_percent}`}>
          {percent.toFixed(0)}%
        </span>{" "}
        of{" "}
        {dataType === "currency" ? (
          <Currency data={data_target} />
        ) : (
          data_target
        )}
      </p>

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
    </div>
  );
}

// Set default props
SmallboxMarketing.defaultProps = {
  title: "Default title",
  data: {
    count: 7,
    target: 10,
  },
};
