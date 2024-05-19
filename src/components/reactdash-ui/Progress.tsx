import { Currency } from "@/components/reactdash-ui";
import {
  PROGRESS_COLOR_STROKES_BG,
  ENUM_COLOR,
  PROGRESS_COLORS,
  PROGRESS_COLORS_BG,
  PROGRESS_COLORS_TROKES,
} from "@/utils/utils.enum";

type ProgressProps = {
  className?: string;
  percent: number;
  type?: "currency";
  model: "circle" | "vertical" | "horizontal";
  data?: number;
  color?: keyof typeof ENUM_COLOR;
};

export default function Progress(props: ProgressProps) {
  // Progress percent
  const percent = props.percent + "%";
  const addClass = props.className ? ` ${props.className}` : "";
  const CustomValue = props.data;
  const typeProgress = props.type;
  const addCustom = props.data ? ` custom-after` : "";

  // Props ( color, model, percent, className )
  const addcolor = props.color
    ? PROGRESS_COLORS[props.color]
    : PROGRESS_COLORS[ENUM_COLOR.primary];
  const addcolorbg = props.color
    ? PROGRESS_COLORS_BG[props.color]
    : PROGRESS_COLORS_BG[ENUM_COLOR.primary];
  const addcolorstroke = props.color
    ? PROGRESS_COLORS_TROKES[props.color]
    : PROGRESS_COLORS_TROKES[ENUM_COLOR.primary];
  const addcolorstrokebg = props.color
    ? PROGRESS_COLOR_STROKES_BG[props.color]
    : PROGRESS_COLOR_STROKES_BG[ENUM_COLOR.primary];

  // model
  const model = props.model;

  // progress circle
  let val = props.percent;
  const c = Math.PI * (60 * 2);
  if (val < 0) {
    val = 0;
  }
  if (val > 100) {
    val = 100;
  }
  const pct = ((100 - val) / 100) * c;
  // circle value
  const DashOffset = pct + "px";

  return (
    <>
      {model === "circle" ? (
        <div
          className={`circle-progress${addCustom} w-full h-40 px-3 flex justify-center items-center relative mx-auto${addClass}`}
          data-percent={props.percent}
        >
          <svg
            className="absolute w-36 h-36"
            viewBox="0 0 70 70"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className={`${addcolorstrokebg}`}
              r="60"
              cx="70"
              cy="70"
              fill="transparent"
              strokeDasharray="376.99"
              strokeDashoffset="0"
            ></circle>
            <circle
              className={`circle-fill ${addcolorstroke}`}
              r="60"
              cx="70"
              cy="70"
              fill="transparent"
              strokeDasharray="376.99"
              strokeDashoffset="0"
              style={{ strokeDashoffset: `${DashOffset}` }}
            ></circle>
          </svg>
          {CustomValue ? (
            <span className="font-bold">
              {typeProgress === "currency" ? (
                <Currency data={CustomValue} />
              ) : (
                CustomValue
              )}
            </span>
          ) : (
            ""
          )}
        </div>
      ) : model === "vertical" ? (
        <div
          className={`flex flex-col flex-nowrap justify-end ${addcolorbg} dark:bg-opacity-40 w-12 h-48 rounded mb-4${addClass}`}
        >
          <div
            className={`progress-vertical relative ${addcolor}`}
            style={{ height: `${percent}` }}
          >
            <span className="w-full text-white pt-2 absolute left=0 right-0 py-1 font-bold text-center">
              {percent}
            </span>
          </div>
        </div>
      ) : (
        <div
          className={`flex h-4 overflow-hidden ${addcolorbg} rounded mb-4${addClass}`}
        >
          <div
            className={`progress-horizontal flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap ${addcolor}`}
            role="progressbar"
            style={{ width: `${percent}` }}
          >
            {percent}
          </div>
        </div>
      )}
    </>
  );
}
