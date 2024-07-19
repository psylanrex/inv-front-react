import { useState } from "react";

type CheckboxProps = {
  checked?: boolean;
  name?: string;
  className?: string;
  label?: string;
  id?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
  classCheckbox?: string;
};

export default function Checkbox({ checked, ...props }: CheckboxProps) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const onChange = props.onChange;
  const onChecked = checked ? checked : isChecked;
  const addClass = props.className ? `${props.className} ` : "";
  const margin_bottom = props.label ? "mb-4" : "";
  const disabledClass = props.disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <label className={`${addClass}flex items-center ${margin_bottom}`}>
      {onChange ? (
        <input
          type="checkbox"
          disabled={props.disabled}
          name={props.name}
          id={props.id}
          value={props.value}
          checked={onChecked}
          onChange={onChange}
          required={props.required}
          className={`${props.classCheckbox} ${disabledClass} form-checkbox ltr:mr-2 rtl:ml-2 h-5 w-5 text-indigo-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded focus:outline-none`}
        />
      ) : (
        <input
          type="checkbox"
          disabled={props.disabled}
          name={props.name}
          id={props.id}
          value={props.value}
          checked={isChecked}
          required={props.required}
          onChange={() => setIsChecked((prev) => !prev)}
          className={`${props.classCheckbox} ${disabledClass} form-checkbox ltr:mr-2 rtl:ml-2 h-5 w-5 text-indigo-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded focus:outline-none`}
        />
      )}
      <span>{props.label}</span>
    </label>
  );
}
