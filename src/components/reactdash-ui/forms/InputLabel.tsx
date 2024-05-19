import {
  ENUM_INPUT_LABEL_SIZE,
  ENUM_SHAPE,
  INPUT_LABEL_SHAPES,
  INPUT_LABEL_SIZES,
} from "@/utils/utils.enum";

type InputLabelProps = {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  label?: string;
  id?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  required?: boolean;
  value?: string | number | readonly string[];
  placeholder?: string;
  shape?: keyof typeof ENUM_SHAPE;
  size?: keyof typeof ENUM_INPUT_LABEL_SIZE;
};

export default function InputLabel(props: InputLabelProps) {
  const addSize = props.size ? INPUT_LABEL_SIZES[props.size] : "py-2 px-4";
  const addShape = props.shape
    ? INPUT_LABEL_SHAPES[props.shape]
    : INPUT_LABEL_SHAPES[ENUM_SHAPE.rounded];
  const addClass = props.className ? `${props.className} ` : "";
  const addType = props.type ? `${props.type}` : "text";
  const disabled_css = props.disabled
    ? " !bg-gray-200 dark:!bg-gray-900 dark:bg-opacity-50 cursor-not-allowed"
    : "";

  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="inline-block mb-2">
        {props.label}
      </label>
      <input
        type={addType}
        aria-label={props.label}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        className={`${addClass}w-full leading-5 relative ${addSize} ${addShape} text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600${disabled_css}`}
        disabled={props.disabled}
        readOnly={props.readOnly}
        required={props.required}
      />
    </div>
  );
}
