import {
  ENUM_SHAPE,
  ENUM_SIZE,
  AVATAR_SHAPES,
  AVATAR_SIZES,
} from "@/utils/utils.enum";
import { Link } from "react-router-dom";

type AvatarGroupData = {
  id: number;
  name: string;
  url: string;
  img: string;
};

type AvatarGroupProps = {
  data: AvatarGroupData[];
  shape?: keyof typeof ENUM_SHAPE;
  size?: keyof typeof ENUM_SIZE;
  className?: string;
  count: number;
};

export default function AvatarGroup(props: AvatarGroupProps) {
  // Data Users
  const datauser = props.data;
  const userlists = [...datauser].sort((a, b) => b.id - a.id);
  const counts = props.count ? props.count : 5;

  // props ( shape, className )
  const addshape = props.shape
    ? AVATAR_SHAPES[props.shape]
    : AVATAR_SHAPES[ENUM_SHAPE.circle];
  const addSize = props.size
    ? AVATAR_SIZES[props.size]
    : AVATAR_SIZES[ENUM_SIZE.small];
  const addClass = props.className ? ` ${props.className}` : "";

  return (
    <>
      {userlists.slice(0, counts).map((userlist, index) => (
        <Link to={userlist.url} key={index}>
          <img
            src={userlist.img}
            alt={userlist.name}
            className={`inline-block shadow-xl max-w-full ltr:-mr-4 rtl:-ml-4 border-2 border-gray-200 bg-gray-300 dark:bg-gray-900 dark:border-gray-700 transform hover:-translate-y-1 ${addSize} ${addshape}${addClass}`}
          />
        </Link>
      ))}
    </>
  );
}
