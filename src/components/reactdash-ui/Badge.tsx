import {
  BADGE_COLORS,
  ENUM_COLOR,
  ENUM_SHAPE,
  SHAPES,
} from "@/utils/utils.enum";

type BadgeProps = {
  shape?: keyof typeof ENUM_SHAPE;
  className?: string;
  color?: keyof typeof ENUM_COLOR;
  children?: React.ReactNode;
};

export default function Badge(props: BadgeProps) {
  // props ( shape, color, className )
  const addshape = props.shape ? SHAPES[props.shape] : "rounded";
  const addcolor = props.color
    ? BADGE_COLORS[props.color]
    : BADGE_COLORS[ENUM_COLOR.light];
  const addClass = props.className ? `${props.className}` : "";

  return (
    <span
      className={`inline-block leading-none text-center py-1 px-2 font-bold text-small ${addcolor} ${addshape} ${addClass}`}
    >
      {props.children}
    </span>
  );
}
