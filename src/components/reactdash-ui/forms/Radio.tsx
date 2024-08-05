import React, { useEffect } from "react";
import { useState } from "react";

type RadioProps = {
  id?: string;
  label: string;
  name?: string;
  disabled?: boolean;
  options?: { id: string | number; value: string | number; title: string }[];
  checked?: string | number;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  extra?: React.ReactNode;
};

const Radio = React.forwardRef(
  (props: RadioProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const [checked, setChecked] = useState(props.checked);
    const addClass = props.className ? `${props.className} ` : "";

    useEffect(() => {
      setChecked(props.checked);
    }, [props.checked]);

    return (
      <div className={`${addClass}relative`}>
        <div className="flex justify-between mb-2">
          <label htmlFor={props.id} className="inline-block">
            <span className="align-sub">{props.label}</span>
          </label>
          {props.extra}
        </div>
        <div id={props.id} className="flex flex-row space-x-4">
          {props.options?.map((option, index) => {
            return (
              <div
                key={index}
                className="relative flex items-center mb-4 ltr:mr-2 rtl:ml-2"
              >
                <input
                  className="form-checkbox h-5 w-5 text-indigo-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 focus:outline-none rounded-full ltr:mr-2 rtl:ml-2"
                  type="radio"
                  ref={ref}
                  id={props.id}
                  disabled={props.disabled}
                  onChange={(event) => {
                    setChecked(event.target.value);
                    props.onChange?.(event);
                  }}
                  name={props.name}
                  checked={checked == option.value}
                  value={option.value}
                  onBlur={props.onBlur}
                />

                <label className="inline-block" htmlFor={`${option.id}`}>
                  {option.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default Radio;
