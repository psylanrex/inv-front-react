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

export enum ENUM_BREADCRUMB_COLOR {
  light = "light",
  dark = "dark",
}

export enum ENUM_BUTTON_COLOR {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  danger = "danger",
  info = "info",
  light = "light",
  dark = "dark",
  disabled = "disabled",
  "twotone-primary" = "twotone-primary",
  "twotone-secondary" = "twotone-secondary",
  "twotone-success" = "twotone-success",
  "twotone-warning" = "twotone-warning",
  "twotone-danger" = "twotone-danger",
  "twotone-info" = "twotone-info",
  "twotone-light" = "twotone-light",
  "twotone-dark" = "twotone-dark",
  "outline-primary" = "outline-primary",
  "outline-secondary" = "outline-secondary",
  "outline-success" = "outline-success",
  "outline-warning" = "outline-warning",
  "outline-danger" = "outline-danger",
  "outline-info" = "outline-info",
  "outline-light" = "outline-light",
  "outline-dark" = "outline-dark",
  "gradient-primary" = "gradient-primary",
  "gradient-secondary" = "gradient-secondary",
  "gradient-success" = "gradient-success",
  "gradient-warning" = "gradient-warning",
  "gradient-danger" = "gradient-danger",
  "gradient-info" = "gradient-info",
  "gradient-light" = "gradient-light",
  "gradient-dark" = "gradient-dark",
}

export enum ENUM_OFF_CANVAS_COLOR {
  light = "light",
  dark = "dark",
  light_dark = "light_dark",
  dark_light = "dark_light",
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

export enum ENUM_BUTTON_SIZE {
  small = "small",
  medium = "medium",
  large = "large",
}

export const AVATAR_SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded-lg",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.circle]: "rounded-full",
  [ENUM_SHAPE.pill]: "rounded-xl",
};

export const BADGE_SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded-lg",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.circle]: "rounded-full",
  [ENUM_SHAPE.pill]: "rounded-xl",
};

export const BUTTON_SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.pill]: "rounded-3xl",
  [ENUM_SHAPE.circle]: "rounded-full !p-2.5",
};

export const AVATAR_SIZES = {
  [ENUM_SIZE["x-small"]]: "w-8 h-8",
  [ENUM_SIZE.small]: "w-12 h-12",
  [ENUM_SIZE.medium]: "w-20 h-20",
  [ENUM_SIZE.large]: "w-32 h-32",
};

export const BUTTON_SIZES = {
  [ENUM_BUTTON_SIZE.small]: "py-1 px-2.5 text-sm",
  [ENUM_BUTTON_SIZE.medium]: "py-2 px-4",
  [ENUM_BUTTON_SIZE.large]: "py-3 px-6",
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

export const BREADCRUMB_COLORS = {
  [ENUM_BREADCRUMB_COLOR.light]: "text-gray-300 hover:text-white",
  [ENUM_BREADCRUMB_COLOR.dark]: "text-gray-500 hover:text-indigo-500",
};

export const BUTTON_COLORS = {
  [ENUM_BUTTON_COLOR.primary]:
    "text-gray-100 bg-indigo-500 border-indigo-500 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 font-semibold",
  [ENUM_BUTTON_COLOR.secondary]:
    "text-gray-100 bg-pink-500 border-pink-500 hover:text-white hover:bg-pink-600 hover:border-pink-600 focus:bg-pink-600 focus:border-pink-600 font-semibold",
  [ENUM_BUTTON_COLOR.success]:
    "text-gray-100 bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:bg-green-600 focus:border-green-600 font-semibold",
  [ENUM_BUTTON_COLOR.warning]:
    "text-gray-800 bg-yellow-300 border-yellow-300 hover:text-gray-900 hover:bg-yellow-400 hover:border-yellow-400 focus:bg-yellow-400 focus:border-yellow-400 font-semibold",
  [ENUM_BUTTON_COLOR.danger]:
    "text-gray-100 bg-red-500 border-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 focus:bg-red-600 focus:border-red-600 font-semibold",
  [ENUM_BUTTON_COLOR.info]:
    "text-gray-100 bg-cyan-500 border-cyan-500 hover:text-white hover:bg-cyan-600 hover:border-cyan-600 focus:bg-cyan-600 focus:border-cyan-600 font-semibold",
  [ENUM_BUTTON_COLOR.light]:
    "text-gray-800 bg-gray-100 border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 font-semibold",
  [ENUM_BUTTON_COLOR.dark]:
    "text-gray-100 bg-gray-900 border-gray-900 hover:text-white hover:bg-black hover:border-black focus:bg-black focus:border-black font-semibold",
  [ENUM_BUTTON_COLOR.disabled]: "cursor-not-allowed font-semibold",
  [ENUM_BUTTON_COLOR["twotone-primary"]]:
    "text-indigo-600 hover:text-indigo-500 bg-indigo-50 border-indigo-50 hover:bg-indigo-100 hover:border-indigo-100 focus:bg-indigo-100 focus:border-indigo-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-secondary"]]:
    "text-pink-600 hover:text-pink-500 bg-pink-50 border-pink-50 hover:bg-pink-100 hover:border-pink-100 focus:bg-pink-100 focus:border-pink-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-success"]]:
    "text-green-600 hover:text-green-500 bg-green-50 border-green-50 hover:bg-green-100 hover:border-green-100 focus:bg-green-100 focus:border-green-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-warning"]]:
    "text-yellow-600 hover:text-yellow-500 bg-yellow-50 border-yellow-50 hover:bg-yellow-100 hover:border-yellow-100 focus:bg-yellow-100 focus:border-yellow-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-danger"]]:
    "text-red-600 hover:text-red-500 bg-red-50 border-red-50 hover:bg-red-100 hover:border-red-100 focus:bg-red-100 focus:border-red-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-info"]]:
    "text-cyan-600 hover:text-cyan-500 bg-cyan-50 border-cyan-50 hover:bg-cyan-100 hover:border-cyan-100 focus:bg-cyan-100 focus:border-cyan-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-light"]]:
    "text-gray-600 hover:text-gray-500 bg-gray-50 border-gray-50 hover:bg-gray-100 hover:border-gray-100 focus:bg-gray-100 focus:border-gray-100 font-semibold",
  [ENUM_BUTTON_COLOR["twotone-dark"]]:
    "text-gray-50 hover:text-gray-100 bg-gray-600 border-gray-600 hover:bg-gray-700 hover:border-gray-700 focus:bg-gray-700 focus:border-gray-700 font-semibold",

  [ENUM_BUTTON_COLOR["outline-primary"]]:
    "text-indigo-500 bg-transparent border-indigo-500 hover:text-gray-100 hover:bg-indigo-500  hover:border-indigo-500 focus:text-gray-100 focus:bg-indigo-500 focus:border-indigo-500 font-semibold",
  [ENUM_BUTTON_COLOR["outline-secondary"]]:
    "text-pink-500 bg-transparent border-pink-500 hover:text-gray-100 hover:bg-pink-500  hover:border-pink-500 focus:text-gray-100 focus:bg-pink-500 focus:border-pink-500 font-semibold",
  [ENUM_BUTTON_COLOR["outline-success"]]:
    "text-green-500 bg-transparent border-green-500 hover:text-gray-100 hover:bg-green-500  hover:border-green-500 focus:text-gray-100 focus:bg-green-500 focus:border-green-500 font-semibold",
  [ENUM_BUTTON_COLOR["outline-warning"]]:
    "text-yellow-500 bg-transparent border-yellow-500 hover:text-gray-100 hover:bg-yellow-500  hover:border-yellow-500 focus:text-gray-100 focus:bg-yellow-500 focus:border-yellow-500 font-semibold",
  [ENUM_BUTTON_COLOR["outline-danger"]]:
    "text-red-500 bg-transparent border-red-500 hover:text-gray-100 hover:bg-red-500  hover:border-red-500 focus:text-gray-100 focus:bg-red-500 focus:border-red-500 font-semibold",
  [ENUM_BUTTON_COLOR["outline-info"]]:
    "text-cyan-500 bg-transparent border-cyan-500 hover:text-gray-100 hover:bg-cyan-500  hover:border-cyan-500 focus:text-gray-100 focus:bg-cyan-500 focus:border-cyan-500 font-semibold",
  [ENUM_BUTTON_COLOR["outline-light"]]:
    "text-gray-100 bg-transparent border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:border-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:border-gray-200 font-semibold",
  [ENUM_BUTTON_COLOR["outline-dark"]]:
    "text-gray-900 bg-transparent border-gray-900 hover:text-white hover:bg-black hover:border-black focus:text-white focus:bg-black focus:border-black font-semibold",

  [ENUM_BUTTON_COLOR["gradient-primary"]]:
    "text-gray-100 bg-indigo-500 border-indigo-500 bg-gradient-to-b from-indigo-400 to-indigo-600  hover:from-indigo-500 hover:to-indigo-600 focus:from-indigo-400 focus:to-indigo-600 hover:text-white  hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-secondary"]]:
    "text-gray-100 bg-pink-500 border-pink-500 bg-gradient-to-b from-pink-400 to-pink-600  hover:from-pink-500 hover:to-pink-600 focus:from-pink-400 focus:to-pink-600 hover:text-white  hover:border-pink-600 focus:bg-pink-600 focus:border-pink-600 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-success"]]:
    "text-gray-100 bg-green-500 border-green-500 bg-gradient-to-b from-green-400 to-green-600  hover:from-green-500 hover:to-green-600 focus:from-green-400 focus:to-green-600 hover:text-white  hover:border-green-600 focus:bg-green-600 focus:border-green-600 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-warning"]]:
    "text-gray-100 bg-yellow-500 border-yellow-500 bg-gradient-to-b from-yellow-400 to-yellow-600  hover:from-yellow-500 hover:to-yellow-600 focus:from-yellow-400 focus:to-yellow-600 hover:text-white  hover:border-yellow-600 focus:bg-yellow-600 focus:border-yellow-600 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-danger"]]:
    "text-gray-100 bg-red-500 border-red-500 bg-gradient-to-b from-red-400 to-red-600  hover:from-red-500 hover:to-red-600 focus:from-red-400 focus:to-red-600 hover:text-white  hover:border-red-600 focus:bg-red-600 focus:border-red-600 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-info"]]:
    "text-gray-100 bg-cyan-500 border-cyan-500 bg-gradient-to-b from-cyan-400 to-cyan-600  hover:from-cyan-500 hover:to-cyan-600 focus:from-cyan-400 focus:to-cyan-600 hover:text-white  hover:border-cyan-600 focus:bg-cyan-600 focus:border-cyan-600 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-light"]]:
    "text-gray-800 bg-gray-100 border-gray-100 bg-gradient-to-b from-gray-100 to-gray-300 hover:from-gray-300 hover:to-gray-100 focus:from-gray-300 focus:to-gray-100 hover:text-gray-900 hover:bg-gray-200  hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 font-semibold",
  [ENUM_BUTTON_COLOR["gradient-dark"]]:
    "text-gray-100 bg-gray-700 border-gray-800 bg-gradient-to-b from-gray-600 to-gray-800  hover:from-gray-800 hover:to-black focus:from-gray-800 focus:to-black hover:text-white hover:border-black focus:bg-black focus:border-black font-semibold",
};

export const OFF_CANVAS_COLORS = {
  [ENUM_OFF_CANVAS_COLOR.light]: "text-gray-300 hover:text-gray-100",
  [ENUM_OFF_CANVAS_COLOR.dark]: "text-gray-800 hover:text-gray-700",
  [ENUM_OFF_CANVAS_COLOR.light_dark]:
    "text-gray-300 hover:text-gray-100 dark:text-gray-800 dark:hover:text-gray-700",
  [ENUM_OFF_CANVAS_COLOR.dark_light]:
    "text-gray-800 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100",
};

export enum ENUM_BUTTON_TYPE {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export const BUTTON_TYPES = {
  [ENUM_BUTTON_TYPE.button]: "button",
  [ENUM_BUTTON_TYPE.submit]: "submit",
  [ENUM_BUTTON_TYPE.reset]: "reset",
};

export enum ENUM_DIRECTION {
  vertical = "vertical",
  horizontal = "horizontal",
}

export const BUTTON_DIRECTIONS = {
  [ENUM_DIRECTION.vertical]: "btn-group-vertical flex-col",
  [ENUM_DIRECTION.horizontal]: "btn-group-horizontal flex-row",
};

export enum ENUM_LIST_GROUP_VARIANTS {
  bordered = "bordered",
  lessborder = "lessborder",
}

export const LIST_GROUP_VARIANTS = {
  [ENUM_LIST_GROUP_VARIANTS.bordered]: "border border-b-0",
  [ENUM_LIST_GROUP_VARIANTS.lessborder]: "border-b",
};

export enum ENUM_OFF_CANVAS_PLACEMENTS {
  left = "left",
  right = "right",
}

export const OFF_CANVAS_PLACEMENTS = {
  [ENUM_OFF_CANVAS_PLACEMENTS.left]: "left-0",
  [ENUM_OFF_CANVAS_PLACEMENTS.right]: "right-0",
};

export const OFF_CANVAS_PLACEMENTS_TWO = {
  [ENUM_OFF_CANVAS_PLACEMENTS.left]: "-left-64",
  [ENUM_OFF_CANVAS_PLACEMENTS.right]: "-right-64",
};

export enum ENUM_PAGINATION_PLACEMENTS {
  left = "left",
  right = "right",
  center = "center",
}

export const PAGINATION_PLACEMENTS = {
  [ENUM_PAGINATION_PLACEMENTS.left]: "justify-start",
  [ENUM_PAGINATION_PLACEMENTS.right]: "justify-end",
  [ENUM_PAGINATION_PLACEMENTS.center]: "justify-center",
};

export enum ENUM_POPOVER_PLACEMENTS {
  top = "top",
  bottom = "bottom",
}

export const POPOVER_PLACEMENTS = {
  [ENUM_POPOVER_PLACEMENTS.top]: "top-auto bottom-full mb-3",
  [ENUM_POPOVER_PLACEMENTS.bottom]: "top-full bottom-auto mt-3",
};

export enum ENUM_POPOVER_ALIGNS {
  left = "left",
  center = "center",
  right = "right",
}

export const POPOVER_ALIGNS = {
  [ENUM_POPOVER_ALIGNS.left]: "text-left",
  [ENUM_POPOVER_ALIGNS.center]: "text-center",
  [ENUM_POPOVER_ALIGNS.right]: "text-right",
};

export const PRELOADER_COLORS = {
  [ENUM_COLOR.primary]: "text-indigo-500",
  [ENUM_COLOR.secondary]: "text-pink-500",
  [ENUM_COLOR.success]: "text-green-500",
  [ENUM_COLOR.warning]: "text-yellow-500",
  [ENUM_COLOR.danger]: "text-red-500",
  [ENUM_COLOR.info]: "text-cyan-500",
  [ENUM_COLOR.light]: "text-gray-500",
  [ENUM_COLOR.dark]: "text-gray-900",
};

export const PROGRESS_COLORS_BG = {
  [ENUM_COLOR.primary]: "bg-indigo-100",
  [ENUM_COLOR.secondary]: "bg-pink-100",
  [ENUM_COLOR.success]: "bg-green-100",
  [ENUM_COLOR.warning]: "bg-yellow-100",
  [ENUM_COLOR.danger]: "bg-red-100",
  [ENUM_COLOR.info]: "bg-cyan-100",
  [ENUM_COLOR.light]: "bg-gray-100",
  [ENUM_COLOR.dark]: "bg-zinc-100",
};

export const PROGRESS_COLORS = {
  [ENUM_COLOR.primary]: "bg-indigo-500",
  [ENUM_COLOR.secondary]: "bg-pink-500",
  [ENUM_COLOR.success]: "bg-green-500",
  [ENUM_COLOR.warning]: "bg-yellow-500",
  [ENUM_COLOR.danger]: "bg-red-500",
  [ENUM_COLOR.info]: "bg-cyan-500",
  [ENUM_COLOR.light]: "bg-gray-500",
  [ENUM_COLOR.dark]: "bg-zinc-500",
};

export const PROGRESS_COLOR_STROKES_BG = {
  [ENUM_COLOR.primary]: "stroke-indigo-100",
  [ENUM_COLOR.secondary]: "stroke-pink-100",
  [ENUM_COLOR.success]: "stroke-green-100",
  [ENUM_COLOR.warning]: "stroke-yellow-100",
  [ENUM_COLOR.danger]: "stroke-red-100",
  [ENUM_COLOR.info]: "stroke-cyan-100",
  [ENUM_COLOR.light]: "stroke-gray-100",
  [ENUM_COLOR.dark]: "stroke-zinc-100",
};

export const PROGRESS_COLORS_TROKES = {
  [ENUM_COLOR.primary]: "stroke-indigo-500",
  [ENUM_COLOR.secondary]: "stroke-pink-500",
  [ENUM_COLOR.success]: "stroke-green-500",
  [ENUM_COLOR.warning]: "stroke-yellow-500",
  [ENUM_COLOR.danger]: "stroke-red-500",
  [ENUM_COLOR.info]: "stroke-cyan-500",
  [ENUM_COLOR.light]: "stroke-gray-500",
  [ENUM_COLOR.dark]: "stroke-zinc-500",
};

export const RATING_SIZES = {
  [ENUM_SIZE["x-small"]]: "w-2 h-2",
  [ENUM_SIZE.small]: "w-4 h-4",
  [ENUM_SIZE.medium]: "w-8 h-8",
  [ENUM_SIZE.large]: "w-12 h-12",
};

export enum ENUM_RIBBON_COLOR {
  primary = "primary",
  secondary = "secondary",
  success = "success",
  warning = "warning",
  danger = "danger",
  info = "info",
  light = "light",
  dark = "dark",
  "outline-primary" = "outline-primary",
  "outline-secondary" = "outline-secondary",
  "outline-success" = "outline-success",
  "outline-warning" = "outline-warning",
  "outline-danger" = "outline-danger",
  "outline-info" = "outline-info",
  "outline-light" = "outline-light",
  "outline-dark" = "outline-dark",
  "gradient-primary" = "gradient-primary",
  "gradient-secondary" = "gradient-secondary",
  "gradient-success" = "gradient-success",
  "gradient-warning" = "gradient-warning",
  "gradient-danger" = "gradient-danger",
  "gradient-info" = "gradient-info",
  "gradient-light" = "gradient-light",
  "gradient-dark" = "gradient-dark",
}

export const RIBBON_COLORS = {
  [ENUM_RIBBON_COLOR.primary]: "text-gray-100 bg-indigo-500",
  [ENUM_RIBBON_COLOR.secondary]: "text-gray-100 bg-pink-500",
  [ENUM_RIBBON_COLOR.success]: "text-gray-100 bg-green-500",
  [ENUM_RIBBON_COLOR.warning]: "text-gray-800 bg-yellow-300",
  [ENUM_RIBBON_COLOR.danger]: "text-gray-100 bg-red-500",
  [ENUM_RIBBON_COLOR.info]: "text-gray-100 bg-cyan-500",
  [ENUM_RIBBON_COLOR.light]: "text-gray-800 bg-gray-100",
  [ENUM_RIBBON_COLOR.dark]: "text-gray-100 bg-gray-900",
  [ENUM_RIBBON_COLOR["outline-primary"]]: "text-indigo-800 bg-indigo-50",
  [ENUM_RIBBON_COLOR["outline-secondary"]]: "text-pink-800 bg-pink-50",
  [ENUM_RIBBON_COLOR["outline-success"]]: "text-green-800 bg-green-50",
  [ENUM_RIBBON_COLOR["outline-warning"]]: "text-yellow-800 bg-yellow-50",
  [ENUM_RIBBON_COLOR["outline-danger"]]: "text-red-800 bg-red-50",
  [ENUM_RIBBON_COLOR["outline-info"]]: "text-cyan-800 bg-cyan-50",
  [ENUM_RIBBON_COLOR["outline-light"]]: "text-gray-800 bg-gray-50",
  [ENUM_RIBBON_COLOR["outline-dark"]]: "text-gray-900 bg-gray-500",
  [ENUM_RIBBON_COLOR["gradient-primary"]]:
    "text-gray-100 bg-indigo-500 bg-gradient-to-b from-indigo-400 to-indigo-600",
  [ENUM_RIBBON_COLOR["gradient-secondary"]]:
    "text-gray-100 bg-pink-500 bg-gradient-to-b from-pink-400 to-pink-600",
  [ENUM_RIBBON_COLOR["gradient-success"]]:
    "text-gray-100 bg-green-500 bg-gradient-to-b from-green-400 to-green-600",
  [ENUM_RIBBON_COLOR["gradient-warning"]]:
    "text-gray-100 bg-yellow-500 bg-gradient-to-b from-yellow-400 to-yellow-600",
  [ENUM_RIBBON_COLOR["gradient-danger"]]:
    "text-gray-100 bg-red-500 bg-gradient-to-b from-red-400 to-red-600",
  [ENUM_RIBBON_COLOR["gradient-info"]]:
    "text-gray-100 bg-cyan-500 bg-gradient-to-b from-cyan-400 to-cyan-600",
  [ENUM_RIBBON_COLOR["gradient-light"]]:
    "text-gray-800 bg-gray-100 bg-gradient-to-b from-gray-100 to-gray-300",
  [ENUM_RIBBON_COLOR["gradient-dark"]]:
    "text-gray-100 bg-gray-700 bg-gradient-to-b from-gray-600 to-gray-800",
};

export enum ENUM_RIBBON_PLACEMENT {
  left = "left",
  right = "right",
}

export const RIBBON_PLACEMENTS = {
  [ENUM_RIBBON_PLACEMENT.left]:
    "ltr:left-0 ltr:text-left rtl:right-0 rtl:text-right ltr:rounded-r rtl:rounded-l overflow-hidden",
  [ENUM_RIBBON_PLACEMENT.right]:
    "ltr:right-0 ltr:text-right rtl:left-0 rtl:text-left ltr:rounded-l rtl:rounded-r overflow-hidden",
};

export const SPINNER_COLORS = {
  [ENUM_COLOR.primary]: "text-indigo-500",
  [ENUM_COLOR.secondary]: "text-pink-500",
  [ENUM_COLOR.success]: "text-green-500",
  [ENUM_COLOR.warning]: "text-yellow-500",
  [ENUM_COLOR.danger]: "text-red-500",
  [ENUM_COLOR.info]: "text-cyan-500",
  [ENUM_COLOR.light]: "text-gray-500",
  [ENUM_COLOR.dark]: "text-gray-900",
};

export const SPINNER_COLORS_BG = {
  [ENUM_COLOR.primary]: "bg-indigo-500",
  [ENUM_COLOR.secondary]: "bg-pink-500",
  [ENUM_COLOR.success]: "bg-green-500",
  [ENUM_COLOR.warning]: "bg-yellow-500",
  [ENUM_COLOR.danger]: "bg-red-500",
  [ENUM_COLOR.info]: "bg-cyan-500",
  [ENUM_COLOR.light]: "bg-gray-500",
  [ENUM_COLOR.dark]: "bg-gray-900",
};

export const SPINNER_SIZES = {
  [ENUM_SIZE["x-small"]]: "h-3 w-3",
  [ENUM_SIZE.small]: "h-5 w-5",
  [ENUM_SIZE.medium]: "h-8 w-8",
  [ENUM_SIZE.large]: "h-20 w-20",
};

export const DISPLAY_SIZES = {
  "1": "text-8xl",
  "2": "text-7xl",
  "3": "text-6xl",
  "4": "text-5xl",
};

export enum ENUM_FIGURE_ALIGN {
  left = "left",
  right = "right",
  center = "center",
}

export const FIGURE_ALIGNS = {
  [ENUM_FIGURE_ALIGN.left]:
    "lg:ltr:float-left lg:rtl:float-right ltr:ml-0 rtl:mr-0 lg:pr-6",
  [ENUM_FIGURE_ALIGN.center]: "w-full",
  [ENUM_FIGURE_ALIGN.right]:
    "lg:ltr:float-right lg:rtl:float-left ltr:ml-0 rtl:mr-0 lg:pl-6",
};

export enum ENUM_PARAGRAPH_ALIGN {
  left = "left",
  center = "center",
  right = "right",
  justify = "justify",
}

export const PARAGRAPH_ALIGNS = {
  [ENUM_PARAGRAPH_ALIGN.left]: "text-left",
  [ENUM_PARAGRAPH_ALIGN.center]: "text-center",
  [ENUM_PARAGRAPH_ALIGN.right]: "text-right",
  [ENUM_PARAGRAPH_ALIGN.justify]: "text-justify",
};

export const INPUT_SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.pill]: "rounded-3xl",
  [ENUM_SHAPE.circle]: "rounded-full !p-2.5",
};

export enum ENUM_INPUT_SIZE {
  small = "small",
  medium = "medium",
  large = "large",
}

export const INPUT_SIZES = {
  [ENUM_INPUT_SIZE.small]: "py-1 px-2.5 text-sm",
  [ENUM_INPUT_SIZE.medium]: "py-2 px-4",
  [ENUM_INPUT_SIZE.large]: "py-3 px-6",
};

export const INPUT_LABEL_SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.pill]: "rounded-3xl",
  [ENUM_SHAPE.circle]: "rounded-full !p-2.5",
};

export enum ENUM_INPUT_LABEL_SIZE {
  small = "small",
  medium = "medium",
  large = "large",
}

export const INPUT_LABEL_SIZES = {
  [ENUM_INPUT_LABEL_SIZE.small]: "py-1 px-2.5 text-sm",
  [ENUM_INPUT_LABEL_SIZE.medium]: "py-2 px-4",
  [ENUM_INPUT_LABEL_SIZE.large]: "py-3 px-6",
};

export enum ENUM_LOGO_COLOR {
  dark = "dark",
  light = "light",
  dark_light = "dark_light",
  light_dark = "light_dark",
}

export const LOGO_COLORS = {
  [ENUM_LOGO_COLOR.dark]: "text-gray-700",
  [ENUM_LOGO_COLOR.light]: "text-gray-200",
  [ENUM_LOGO_COLOR.dark_light]: "text-gray-700 dark:text-gray-200",
  [ENUM_LOGO_COLOR.light_dark]: "text-gray-200 dark:text-gray-700",
};

export enum ENUM_SIDEBAR_MODEL {
  compact = "compact",
  default = "default",
}

export const SIDEBAR_MODELS = {
  [ENUM_SIDEBAR_MODEL.compact]: "sidebar-compact w-0 md:w-20",
  [ENUM_SIDEBAR_MODEL.default]: "sidebar-area w-64",
};

export enum ENUM_SIDEBAR_COLOR {
  dark = "dark",
  light = "light",
}

export const SIDEBAR_COLORS = {
  [ENUM_SIDEBAR_COLOR.dark]: "dark",
  [ENUM_SIDEBAR_COLOR.light]: "light",
};

export const INPUT_PASSWORD_SHAPES = {
  [ENUM_SHAPE.rounded]: "rounded",
  [ENUM_SHAPE.square]: "rounded-none",
  [ENUM_SHAPE.pill]: "rounded-3xl",
  [ENUM_SHAPE.circle]: "rounded-full !p-2.5",
};

export enum ENUM_INPUT_PASSWORD_SIZE {
  small = "small",
  medium = "medium",
  large = "large",
}

export const INPUT_PASSWORD_SIZES = {
  [ENUM_INPUT_PASSWORD_SIZE.small]: "py-1 px-2.5 text-sm",
  [ENUM_INPUT_PASSWORD_SIZE.medium]: "py-2 px-4",
  [ENUM_INPUT_PASSWORD_SIZE.large]: "py-3 px-6",
};
