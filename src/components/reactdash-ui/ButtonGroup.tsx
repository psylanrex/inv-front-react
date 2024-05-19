import { BUTTON_DIRECTIONS, ENUM_DIRECTION } from "@/utils/utils.enum";

type ButtonGroupProps = {
  className?: string;
  children?: React.ReactNode;
  direction?: keyof typeof ENUM_DIRECTION;
};

export default function ButtonGroup(props: ButtonGroupProps) {
  // Props ( direction, className )
  const adddirection = props.direction
    ? BUTTON_DIRECTIONS[props.direction]
    : "btn-group-horizontal inline-flex flex-row";
  const addClass = props.className ? `${props.className}` : "";

  return (
    <div className={`inline-flex ${adddirection} ${addClass}`}>
      {props.children}
    </div>
  );
}
