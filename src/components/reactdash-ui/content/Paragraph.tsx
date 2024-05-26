import { ENUM_PARAGRAPH_ALIGN, PARAGRAPH_ALIGNS } from "@/utils/utils.enum";

type ParagraphProps = {
  children: React.ReactNode;
  align?: keyof typeof ENUM_PARAGRAPH_ALIGN;
};

export default function Paragraph(props: ParagraphProps) {
  const addAlign = props.align ? PARAGRAPH_ALIGNS[props.align] : "";

  return <p className={`${addAlign} mb-4`}>{props.children}</p>;
}
