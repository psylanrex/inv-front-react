import { ChevronDown } from "react-bootstrap-icons";
import { Button } from "@/components/reactdash-ui";
import { Disclosure, Transition } from "@headlessui/react";
import { ENUM_BUTTON_COLOR } from "@/utils/utils.enum";

type CollapseProps = {
  className?: string;
  children?: React.ReactNode;
  title: string;
  color?: keyof typeof ENUM_BUTTON_COLOR;
};

export default function Collapse(props: CollapseProps) {
  // Props ( title, color, className )
  const color = props.color;
  const addClass = props.className ? ` ${props.className}` : "";

  return (
    <div className={`relative${addClass}`}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button as="div">
              <Button
                type="button"
                color={color}
                className="!mb-0 flex items-center"
              >
                {props.title}
                <ChevronDown
                  className={`${
                    open ? "-rotate-180" : "rotate-0"
                  } w-3 h-3 transform transition duration-300 ml-2`}
                />
              </Button>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="border px-4 py-3 my-2 dark:border-gray-700">
                {props.children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
