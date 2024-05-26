import {
  ENUM_LIST_GROUP_VARIANTS,
  LIST_GROUP_VARIANTS,
} from "@/utils/utils.enum";
import { Link } from "react-router-dom";

type ListGroupData = {
  title: string;
  url: string;
  count?: number;
};

type ListGroupProps = {
  className?: string;
  variant?: keyof typeof ENUM_LIST_GROUP_VARIANTS;
  data: ListGroupData[];
};

export default function ListGroup(props: ListGroupProps) {
  // Props ( data, className )
  const Lists = props.data;

  const addVariant = props.variant
    ? LIST_GROUP_VARIANTS[props.variant]
    : LIST_GROUP_VARIANTS[ENUM_LIST_GROUP_VARIANTS.bordered];
  const addClass = props.className ? `${props.className}` : "";

  return (
    <ul
      className={`px-0 border-b border-gray-200 dark:border-gray-700 ${addClass}`}
    >
      {Lists.map((list, index) => (
        <li key={index} className="group">
          <Link
            to={list.url}
            className={`${addVariant} border-gray-200 dark:border-gray-700 list-none rounded-sm py-3 px-4 flex justify-between items-center group-hover:text-indigo-700 group-hover:bg-indigo-50 dark:group-hover:bg-gray-700 dark:group-hover:text-white`}
          >
            {list.title}
            {list.count && list.count > 0 ? (
              <span className="text-sm py-1 px-2 bg-indigo-50 text-indigo-700 rounded group-hover:text-indigo-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-900 dark:group-hover:text-white">
                {list.count}
              </span>
            ) : (
              <></>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
