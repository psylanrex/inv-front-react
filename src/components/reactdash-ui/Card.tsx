type CardProps = {
  className?: string;
  children?: React.ReactNode;
  hidden?: boolean;
};

export default function Card(props: CardProps) {
  const addClass = props.className ? `${props.className}` : "";

  if (props.hidden) return null;
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-indigo-300/10 p-6 ${addClass}`}
    >
      {props.children}
    </div>
  );
}
