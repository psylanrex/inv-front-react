import {
  ENUM_INPUT_PASSWORD_SIZE,
  ENUM_SHAPE,
  INPUT_PASSWORD_SHAPES,
  INPUT_PASSWORD_SIZES,
} from "@/utils/utils.enum";
import React from "react";
import { useState } from "react";
import { EyeSlash, Eye } from "react-bootstrap-icons";

type InputPasswordProps = {
  model?: "float";
  className?: string;
  disabled?: boolean;
  shape?: keyof typeof ENUM_SHAPE;
  size?: keyof typeof ENUM_INPUT_PASSWORD_SIZE;
  label?: string;
  id?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string | number | readonly string[];
  readOnly?: boolean;
  required?: boolean;
};

const InputPassword = React.forwardRef(
  (props: InputPasswordProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    // Initialize
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

    const addSize = props.size
      ? INPUT_PASSWORD_SIZES[props.size]
      : INPUT_PASSWORD_SIZES[ENUM_INPUT_PASSWORD_SIZE.medium];
    const addShape = props.shape
      ? INPUT_PASSWORD_SHAPES[props.shape]
      : INPUT_PASSWORD_SHAPES[ENUM_SHAPE.rounded];
    const addClass = props.className ? `${props.className} ` : "";
    const disabled_css = props.disabled
      ? " !bg-gray-200 dark:!bg-gray-900 dark:bg-opacity-50 cursor-not-allowed"
      : "";
    const inputClassName =
      props.model === "float"
        ? `${addClass}w-full block leading-5 relative pt-5 pb-2 px-4 ${addShape} text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 peer${disabled_css}`
        : `${addClass}w-full leading-5 relative ${addSize} ${addShape} text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600${disabled_css}`;
    const eyeClassName =
      props.model === "float"
        ? "cursor-pointer w-5 h-5 absolute right-4 rtl:left-4 top-3"
        : "cursor-pointer w-5 h-5 absolute right-4 rtl:left-4 top-2";

    return (
      <div className={`${props.model !== "float" ? "mb-4" : ""}`}>
        {props.label ? (
          <label htmlFor={props.id} className="inline-block mb-2">
            {props.label}
            {props.required && <span className="text-red-500"> *</span>}
          </label>
        ) : null}
        <div className="relative z-0">
          <input
            ref={ref}
            type={passwordShown ? "text" : "password"}
            aria-label={props.name}
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}
            className={inputClassName}
            disabled={props.disabled}
            readOnly={props.readOnly}
            required={props.required}
          />
          {props.model === "float" ? (
            <label
              htmlFor={props.id}
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              {props.placeholder}
            </label>
          ) : null}
          {passwordShown ? (
            <Eye
              title="Hide password"
              className={eyeClassName}
              onClick={togglePassword}
            ></Eye>
          ) : (
            <EyeSlash
              title="Show password"
              className={eyeClassName}
              onClick={togglePassword}
            ></EyeSlash>
          )}
        </div>
      </div>
    );
  }
);

export default InputPassword;
