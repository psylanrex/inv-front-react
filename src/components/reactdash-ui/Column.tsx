type ColumnProps = {
  className?: string;
  children?: React.ReactNode;
};

// column
export default function Column(props: ColumnProps) {
  // props ( className )
  const addClass = props.className ? `${props.className}` : "";

  return (
    <div className={`flex-shrink max-w-full ${addClass}`}>{props.children}</div>
  );
}
