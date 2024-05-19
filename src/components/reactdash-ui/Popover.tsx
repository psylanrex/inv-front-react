import { useState } from "react";
import { Button } from "@/components/reactdash-ui";
import {
  ENUM_POPOVER_ALIGNS,
  ENUM_POPOVER_PLACEMENTS,
  POPOVER_ALIGNS,
  POPOVER_PLACEMENTS,
} from "@/utils/utils.enum";

type PopoverProps = {
  className?: string;
  title?: string;
  description?: string;
  btn_text: string;
  placement?: keyof typeof ENUM_POPOVER_PLACEMENTS;
  align?: keyof typeof ENUM_POPOVER_ALIGNS;
};

export default function Popover(props: PopoverProps) {
  // set toggle
  const [isTogglepop, setTogglepop] = useState(false);

  const carets = {
    [ENUM_POPOVER_PLACEMENTS.top]:
      "border-l border-b bottom-0 -mb-1.5 bg-white dark:bg-gray-900",
    [ENUM_POPOVER_PLACEMENTS.bottom]: `border-r border-t top-0 -mt-1.5 ${
      props.title ? "bg-gray-100 dark:bg-black" : "bg-white dark:bg-gray-900"
    }`,
  };

  // Props ( placement, align )
  const addplacement = props.placement
    ? POPOVER_PLACEMENTS[props.placement]
    : POPOVER_PLACEMENTS[ENUM_POPOVER_PLACEMENTS.top];
  const addcaret = props.placement
    ? carets[props.placement]
    : carets[ENUM_POPOVER_PLACEMENTS.top];
  const addalign = props.align ? POPOVER_ALIGNS[props.align] : "text-left";
  const addClass = props.className ? `${props.className}` : "relative";

  return (
    <div className="relative inline-block mb-3">
      <Button
        onClick={() => setTogglepop(!isTogglepop)}
        className={`${addClass}`}
      >
        {props.btn_text}
      </Button>

      <div
        className={`absolute ${addplacement} hidden ${
          isTogglepop ? "!block" : ""
        }`}
      >
        <div
          className={`z-60 w-60 -mb-1 leading-tight text-gray-700 bg-white border border-gray-200 dark:text-gray-200 dark:bg-gray-900 dark:border-black rounded-lg shadow-lg ${addalign}`}
        >
          {props.title ? (
            <div className="bg-gray-100 text-sm dark:bg-black px-4 py-2">
              {props.title}
            </div>
          ) : (
            ""
          )}
          <div className="px-4 py-3 text-sm bg-white dark:bg-gray-900">
            {props.description}
          </div>
        </div>
        <div
          className={`absolute transform -rotate-45 p-1 w-1 ${addcaret} border-gray-200 dark:border-black ltr:ml-6 rtl:mr-6`}
        ></div>
      </div>
    </div>
  );
}
