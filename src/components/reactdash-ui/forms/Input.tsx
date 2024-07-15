import {
  ENUM_INPUT_SIZE,
  ENUM_SHAPE,
  INPUT_SHAPES,
  INPUT_SIZES,
} from "@/utils/utils.enum";

type InputProps = {
  model?: "float";
  className?: string;
  name?: string;
  value?: string | number | readonly string[];
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  shape?: keyof typeof ENUM_SHAPE;
  type?: React.HTMLInputTypeAttribute;
  size?: keyof typeof ENUM_INPUT_SIZE;
  min?: string | number;
  max?: string | number;
};

export default function Input(props: InputProps) {
  const addSize = props.size ? INPUT_SIZES[props.size] : "py-2 px-4";
  const addShape = props.shape
    ? INPUT_SHAPES[props.shape]
    : INPUT_SHAPES[ENUM_SHAPE.rounded];
  const addClass = props.className ? `${props.className} ` : "";
  const addType = props.type ? `${props.type}` : "text";
  const disabled_css = props.disabled
    ? " !bg-gray-200 dark:!bg-gray-900 dark:bg-opacity-50 cursor-not-allowed"
    : "";

  return (
    <>
      {props.model === "float" ? (
        <div className="relative z-0">
          <input
            type={addType}
            aria-label={props.name}
            name={props.name}
            id={props.id}
            onChange={props.onChange}
            value={props.value}
            disabled={props.disabled}
            readOnly={props.readOnly}
            required={props.required}
            min={props.min}
            max={props.max}
            className={`${addClass}w-full block leading-5 relative pt-5 pb-2 px-4 ${addShape} text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 peer${disabled_css}`}
            placeholder=" "
          />
          <label
            htmlFor={props.id}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:left-4 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            {props.placeholder}
          </label>
        </div>
      ) : (
        <input
          type={addType}
          aria-label={props.name}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
          className={`${addClass}w-full leading-5 relative ${addSize} ${addShape} text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600${disabled_css}`}
          disabled={props.disabled}
          readOnly={props.readOnly}
          required={props.required}
          min={props.min}
          max={props.max}
        />
      )}
    </>
  );
}
