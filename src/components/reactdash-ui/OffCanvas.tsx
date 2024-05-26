import {
  ENUM_OFF_CANVAS_COLOR,
  ENUM_OFF_CANVAS_PLACEMENTS,
  OFF_CANVAS_COLORS,
  OFF_CANVAS_PLACEMENTS,
  OFF_CANVAS_PLACEMENTS_TWO,
} from "@/utils/utils.enum";
import { useState } from "react";
import { List } from "react-bootstrap-icons";

type OffCanvasProps = {
  className?: string;
  children?: React.ReactNode;
  color?: keyof typeof ENUM_OFF_CANVAS_COLOR;
  placement?: keyof typeof ENUM_OFF_CANVAS_PLACEMENTS;
};

export default function OffCanvas(props: OffCanvasProps) {
  // set toggle
  const [isToggle, setToggle] = useState(false);
  function closeCanvas() {
    setToggle(false);
  }

  // Props ( placement )
  const addplacement = props.placement
    ? OFF_CANVAS_PLACEMENTS[props.placement]
    : OFF_CANVAS_PLACEMENTS[ENUM_OFF_CANVAS_PLACEMENTS.right];
  const addcolor = props.color
    ? OFF_CANVAS_COLORS[props.color]
    : OFF_CANVAS_COLORS[ENUM_OFF_CANVAS_COLOR.dark_light];
  const addplacementtwo = props.placement
    ? OFF_CANVAS_PLACEMENTS_TWO[props.placement]
    : OFF_CANVAS_PLACEMENTS_TWO[ENUM_OFF_CANVAS_PLACEMENTS.right];

  return (
    <div>
      <button
        onClick={() => setToggle(!isToggle)}
        type="button"
        className={`inline-flex items-center justify-center focus:outline-none focus:ring-0 ${addcolor}`}
      >
        <span className="sr-only">Menu</span>
        <List className="w-8 h-8" />
      </button>

      <div
        className={`fixed inset-0 z-50 ${
          isToggle ? "w-full h-full" : "w-0 h-0"
        }`}
      >
        {/* bg canvas  */}
        <span
          onClick={closeCanvas}
          className={`fixed bg-gray-900 bg-opacity-70 inset-x-0 top-0 ${
            isToggle ? "w-full h-full" : "w-0 h-0"
          }`}
        ></span>

        <div
          className={`flex flex-col fixed top-0 py-4 bg-white dark:bg-gray-800 h-full overflow-auto z-40 transition-all duration-300 ease-in-out w-64 ${
            isToggle ? `${addplacement}` : `${addplacementtwo}`
          }`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
