import { ALERT_COLORS, ENUM_COLOR } from "@/utils/utils.enum";
import { useState } from "react";
import { XCircle } from "react-bootstrap-icons";

type AlertProps = {
  color?: keyof typeof ENUM_COLOR;
  className?: string;
  children?: React.ReactNode;
};

export default function Alert(props: AlertProps) {
  // close alert
  const [isOpen, setOpen] = useState(false);

  // props ( color, className )
  const addcolor = props.color
    ? ALERT_COLORS[props.color]
    : ALERT_COLORS[ENUM_COLOR.light];
  const addClass = props.className ? `${props.className}` : "";

  return (
    <div
      className={`flex justify-between items-center relative py-3 px-6 rounded mb-4 ${
        isOpen ? "hidden" : ""
      } ${addcolor} ${addClass}`}
    >
      <div>{props.children}</div>
      <button onClick={() => setOpen(!isOpen)}>
        <XCircle className="hover:text-red-500" />
      </button>
    </div>
  );
}
