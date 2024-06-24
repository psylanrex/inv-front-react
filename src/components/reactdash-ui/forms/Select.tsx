import React from "react";

type SelectData = {
  title: string;
  value: string;
};

type SelectProps = {
  label?: string;
  id?: string;
  name: string;
  options?: SelectData[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  selectClassName?: string;
  extra?: React.ReactNode;
};

const Select = React.forwardRef(
  (props: SelectProps, ref: React.ForwardedRef<HTMLSelectElement>) => {
    const options = props.options;
    const addClass = props.className ? `${props.className} ` : "";
    const selectClass = props.selectClassName
      ? `${props.selectClassName} `
      : "";
    const disabled_css = props.disabled
      ? " !bg-gray-200 dark:!bg-gray-900 dark:bg-opacity-50 cursor-not-allowed"
      : "";

    return (
      <div className={`${addClass}mb-4`}>
        {props.label && (
          <div className="flex justify-between mb-2">
            <label htmlFor={props.id} className="inline-block">
              <span className="align-sub">
                {props.label}
                {props.required && <span className="text-red-500"> *</span>}
              </span>
            </label>
            {props.extra}
          </div>
        )}
        <select
          name={props.name}
          id={props.id}
          ref={ref}
          disabled={props.disabled}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required={props.required}
          className={`inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none${disabled_css} ${selectClass}`}
        >
          <option hidden disabled selected value="">
            {props.placeholder ?? "Select"}
          </option>
          {options?.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.title}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
);

export default Select;
