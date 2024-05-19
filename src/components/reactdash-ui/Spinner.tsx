import {
  ENUM_COLOR,
  ENUM_SIZE,
  SPINNER_COLORS,
  SPINNER_COLORS_BG,
  SPINNER_SIZES,
} from "@/utils/utils.enum";

type SpinnerProps = {
  className?: string;
  model?: "ping";
  color?: keyof typeof ENUM_COLOR;
  size?: keyof typeof ENUM_SIZE;
};

export default function Spinner(props: SpinnerProps) {
  // model
  const model = props.model;

  // colors
  const addcolor = props.color
    ? SPINNER_COLORS[props.color]
    : SPINNER_COLORS[ENUM_COLOR.primary];

  // Props ( color, size, className, model )
  const addcolorbg = props.color
    ? SPINNER_COLORS_BG[props.color]
    : SPINNER_COLORS_BG[ENUM_COLOR.primary];
  const addSize = props.size
    ? SPINNER_SIZES[props.size]
    : SPINNER_SIZES[ENUM_SIZE.medium];
  const addClass = props.className ? ` ${props.className}` : "";

  return (
    <>
      {model === "ping" ? (
        <div className={`inline-block${addClass}`}>
          <span className={`relative flex ${addSize}`}>
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${addcolorbg}`}
            ></span>
            <span
              className={`relative inline-flex rounded-full ${addSize} ${addcolorbg}`}
            ></span>
          </span>
        </div>
      ) : (
        <div className={`inline-block${addClass}`}>
          <svg
            className={`animate-spin ${addSize} ${addcolor}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </>
  );
}
