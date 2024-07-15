import {
  BUTTON_COLORS,
  BUTTON_SHAPES,
  BUTTON_SIZES,
  BUTTON_TYPES,
  ENUM_BUTTON_COLOR,
  ENUM_BUTTON_SIZE,
  ENUM_BUTTON_TYPE,
  ENUM_SHAPE,
} from "@/utils/utils.enum";

type ButtonProps = {
  color?: keyof typeof ENUM_BUTTON_COLOR;
  size?: keyof typeof ENUM_BUTTON_SIZE;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  shape?: keyof typeof ENUM_SHAPE;
  type?: keyof typeof ENUM_BUTTON_TYPE;
  hidden?: boolean;
};

export default function Button(props: ButtonProps) {
  // Props ( color, size, className, onClick )
  const addcolor = props.color
    ? BUTTON_COLORS[props.color]
    : BUTTON_COLORS[ENUM_BUTTON_COLOR.primary];
  const addSize = props.size
    ? BUTTON_SIZES[props.size]
    : BUTTON_SIZES[ENUM_BUTTON_SIZE.medium];
  const addshape = props.shape ? BUTTON_SHAPES[props.shape] : "rounded";
  const addtype: any = props.type ? BUTTON_TYPES[props.type] : "button";
  const addClass = props.className ? `${props.className} ` : "";

  return (
    <button
      hidden={props.hidden}
      onClick={props.onClick}
      className={`${addClass}inline-block text-center border leading-5 hover:ring-0 focus:outline-none focus:ring-0 ${addSize} ${addcolor} ${addshape}`}
      type={addtype}
    >
      {props.children}
    </button>
  );
}
