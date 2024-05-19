import { DISPLAY_SIZES } from "@/utils/utils.enum";

type DisplayProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  size?: "1" | "2" | "3" | "4";
};

export default function Display(props: DisplayProps) {
  const addSize = props.size ? DISPLAY_SIZES[props.size] : "text-5xl";

  return (
    <>
      {props.variant === "h1" ? (
        <h1
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </h1>
      ) : props.variant === "h2" ? (
        <h2
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </h2>
      ) : props.variant === "h3" ? (
        <h3
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </h3>
      ) : props.variant === "h4" ? (
        <h4
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </h4>
      ) : props.variant === "h5" ? (
        <h5
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </h5>
      ) : props.variant === "h6" ? (
        <h6
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </h6>
      ) : (
        <p
          className={`${addSize} mb-6 font-normal text-gray-800 dark:text-gray-300`}
        >
          {props.children}
        </p>
      )}
    </>
  );
}
