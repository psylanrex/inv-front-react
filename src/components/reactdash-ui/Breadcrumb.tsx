import { BREADCRUMB_COLORS, ENUM_BREADCRUMB_COLOR } from "@/utils/utils.enum";
import { Link } from "react-router-dom";

type BreadcrumbData = {
  title: string;
  url: string;
};

type BreadcrumbProps = {
  data: BreadcrumbData[];
  color?: keyof typeof ENUM_BREADCRUMB_COLOR;
  className?: string;
};

export default function Breadcrumb(props: BreadcrumbProps) {
  // data breadcrumb
  const breadcrumbLists = props.data;

  // props ( color, className )
  const addcolor = props.color
    ? BREADCRUMB_COLORS[props.color]
    : BREADCRUMB_COLORS[ENUM_BREADCRUMB_COLOR.dark];
  const addClass = props.className ? `${props.className}` : "";

  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol
        className={`breadcrumb-lists flex flex-wrap justify-start bg-transparent mb-0 space-x-2 ${props.color}`}
      >
        {breadcrumbLists.map((list, index) => (
          <li key={index}>
            <Link to={list.url} className={`${addcolor} ${addClass}`}>
              {list.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
