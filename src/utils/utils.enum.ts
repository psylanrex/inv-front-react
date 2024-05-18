export enum ENUM_COLOR {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  danger = "danger",
  info = "info",
  light = "light",
  dark = "dark",
}

export enum ENUM_SHAPE {
  rounded = "rounded",
  square = "square",
  circle = "circle",
  pill = "pill",
}

export enum ENUM_SIZE {
  "x-small" = "x-small",
  small = "small",
  medium = "medium",
  large = "large",
}

export const SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded-lg",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.circle]: "rounded-full",
  [ENUM_SHAPE.pill]: "rounded-xl",
};

export const SIZES = {
  [ENUM_SIZE["x-small"]]: "w-8 h-8",
  [ENUM_SIZE.small]: "w-12 h-12",
  [ENUM_SIZE.medium]: "w-20 h-20",
  [ENUM_SIZE.large]: "w-32 h-32",
};

export const ALERT_COLORS = {
  [ENUM_COLOR.primary]:
    "bg-gray-200 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100",
  [ENUM_COLOR.secondary]:
    "bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100",
  [ENUM_COLOR.success]:
    "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100",
  [ENUM_COLOR.warning]:
    "bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100",
  [ENUM_COLOR.danger]:
    "bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100",
  [ENUM_COLOR.info]:
    "bg-cyan-200 text-gray-900 dark:bg-cyan-900 dark:text-cyan-100",
  [ENUM_COLOR.light]: "bg-gray-50 text-gray-900",
  [ENUM_COLOR.dark]: "bg-gray-500 text-gray-100",
};

export const BADGE_COLORS = {
  [ENUM_COLOR.primary]: "bg-indigo-500 text-gray-100",
  [ENUM_COLOR.secondary]: "bg-pink-500 text-gray-100",
  [ENUM_COLOR.success]: "bg-green-500 text-gray-100",
  [ENUM_COLOR.info]: "bg-cyan-500 text-gray-100",
  [ENUM_COLOR.warning]: "bg-yellow-300 text-gray-800",
  [ENUM_COLOR.danger]: "bg-red-500 text-gray-100",
  [ENUM_COLOR.light]: "bg-gray-100 text-gray-900",
  [ENUM_COLOR.dark]: "bg-black text-gray-100",
};
