import { useState } from "react";
import { List } from "react-bootstrap-icons";
import { SubmenuAccordion } from "@/components/reactdash-ui";
import Logo from "@/components/navbar/Logo";
import {
  ENUM_OFF_CANVAS_COLOR,
  ENUM_OFF_CANVAS_PLACEMENTS,
  OFF_CANVAS_COLORS,
  OFF_CANVAS_PLACEMENTS,
  OFF_CANVAS_PLACEMENTS_TWO,
} from "@/utils/utils.enum";

type OffCanvasMenuContent = {
  text: string;
  logo: string;
  logo_text?: string;
};

type OffCanvasMenuData = {
  id: number;
  title: string;
  url: string;
};

type OffCanvasMenuProps = {
  className?: string;
  color?: keyof typeof ENUM_OFF_CANVAS_COLOR;
  placement?: keyof typeof ENUM_OFF_CANVAS_PLACEMENTS;
  content: OffCanvasMenuContent;
  data: OffCanvasMenuData[];
};

export default function OffCanvasMenu(props: OffCanvasMenuProps) {
  // set toggle
  const [isToggle, setToggle] = useState(false);
  function closeCanvas() {
    setToggle(false);
  }

  // props ( logo, copyright, data )
  const copyright = props.content.text;
  const addcolor = props.color
    ? OFF_CANVAS_COLORS[props.color]
    : OFF_CANVAS_COLORS[ENUM_OFF_CANVAS_COLOR.dark_light];
  const listmenu = props.data;

  const addplacement = props.placement
    ? OFF_CANVAS_PLACEMENTS[props.placement]
    : OFF_CANVAS_PLACEMENTS[ENUM_OFF_CANVAS_PLACEMENTS.right];
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

        <nav
          className={`flex flex-col fixed top-0 py-4 bg-white dark:bg-gray-800 h-full overflow-auto z-40 transition-all duration-300 ease-in-out w-64 ${
            isToggle ? `${addplacement}` : `${addplacementtwo}`
          }`}
        >
          <div className="mb-auto">
            {/* logo  */}
            <div className="mh-18 text-center px-12 mb-8">
              <div className="relative">
                <Logo color="dark_light" />
              </div>
            </div>

            {/* menu */}
            <div className="mb-4">
              <nav className="relative flex flex-wrap items-center justify-between">
                <ul id="side-menu" className="w-full float-none flex flex-col">
                  {/* list menu  */}
                  <SubmenuAccordion data={listmenu} />
                </ul>
              </nav>
            </div>
          </div>

          {/* copyright */}
          {copyright ? (
            <div className="mt-5 text-center">
              <p>{copyright}</p>
            </div>
          ) : (
            ""
          )}
        </nav>
      </div>
    </div>
  );
}
