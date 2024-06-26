type TooltipProps = {
  className?: string;
  placement?: "top" | "bottom";
  title: string;
  children?: React.ReactNode;
};

export default function Tooltip(props: TooltipProps) {
  // Props ( placement )
  const placement = props.placement ? props.placement : "top";
  const addClass = props.className ? `${props.className}` : "";

  return (
    <>
      <div
        className="relative inline-block"
        aria-label={props.title}
        data-microtip-position={placement}
        role="tooltip"
      >
        <div className={`relative ${addClass}`}>{props.children}</div>
      </div>
    </>
  );
}
