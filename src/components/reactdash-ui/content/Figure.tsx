import { ENUM_FIGURE_ALIGN, FIGURE_ALIGNS } from "@/utils/utils.enum";

type FigureProps = {
  description: string;
  img: string;
  alt?: string;
  align?: keyof typeof ENUM_FIGURE_ALIGN;
};

export default function Figure(props: FigureProps) {
  const addAlign = props.align ? FIGURE_ALIGNS[props.align] : "w-full";

  return (
    <figure className={`${addAlign} text-center mb-5`}>
      <img
        className="max-w-full h-auto mx-auto"
        src={props.img}
        alt={props.alt}
      />
      <figcaption>{props.description}</figcaption>
    </figure>
  );
}
