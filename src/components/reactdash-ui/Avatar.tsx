import { ENUM_SHAPE, ENUM_SIZE, SHAPES, SIZES } from "@/utils/utils.enum";

type AvatarProps = {
  data: { img: string; name: string };
  shape?: keyof typeof ENUM_SHAPE;
  size?: keyof typeof ENUM_SIZE;
  className?: string;
};

export default function Avatar(props: AvatarProps) {
  // avatar
  const avatar = props.data;

  // props ( shape, size, className )
  const addshape = props.shape
    ? SHAPES[props.shape]
    : SHAPES[ENUM_SHAPE.circle];
  const addSize = props.size ? SIZES[props.size] : SIZES[ENUM_SIZE.medium];
  const addClass = props.className ? ` ${props.className}` : "";

  return (
    <>
      <img
        src={avatar.img}
        alt={avatar.name}
        className={`inline-block max-w-full bg-gray-300 dark:bg-gray-800 ${addSize} ${addshape}${addClass}`}
      />
    </>
  );
}
