import {
  ENUM_RIBBON_COLOR,
  ENUM_RIBBON_PLACEMENT,
  RIBBON_COLORS,
  RIBBON_PLACEMENTS,
} from "@/utils/utils.enum";

type RibbonProps = {
  color?: keyof typeof ENUM_RIBBON_COLOR;
  placement?: keyof typeof ENUM_RIBBON_PLACEMENT;
  className?: string;
  children?: React.ReactNode;
};

export default function Ribbon(props: RibbonProps) {
  // default props ( color, placement, className )
  const addcolor = props.color
    ? RIBBON_COLORS[props.color]
    : RIBBON_COLORS[ENUM_RIBBON_COLOR.primary];
  const addplacement = props.placement
    ? RIBBON_PLACEMENTS[props.placement]
    : RIBBON_PLACEMENTS[ENUM_RIBBON_PLACEMENT.right];
  const addClass = props.className ? ` ${props.className}` : "";

  return (
    <div className={`absolute top-4 text-sm ${addplacement}${addClass}`}>
      <span className={`px-4 py-2 block align-center shadow ${addcolor}`}>
        {props.children}
      </span>
    </div>
  );
}
