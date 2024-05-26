type RowProps = {
  className?: string;
  children?: React.ReactNode;
};

// flex row
export default function Row(props: RowProps) {
  // Props ( className )
  const addClass = props.className ? `${props.className}` : "";

  return (
    <div className={`flex flex-wrap flex-row ${addClass}`}>
      {props.children}
    </div>
  );
}
