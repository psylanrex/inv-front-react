type ColumnProps = {
  className?: string;
  children?: React.ReactNode;
  hidden?: boolean;
};

// column
export default function Column(props: ColumnProps) {
  // props ( className )
  const addClass = props.className ? `${props.className}` : "";

  if (props.hidden) return null;
  return (
    <div className={`flex-shrink max-w-full ${addClass}`}>{props.children}</div>
  );
}
