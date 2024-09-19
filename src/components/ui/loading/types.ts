export enum Sizes {
  /**
   * Small size loading spinner.
   */
  sm = "h-8 w-8 border-2 border-t-2",

  /**
   * Medium size loading spinner.
   */
  md = "h-12 w-12",

  /**
   * Large size loading spinner.
   */
  lg = "h-16 w-16"
}

export interface ILoadingProps {
  /**
   * Custom CSS class name(s) to apply to the loading spinner.
   */
  className?: string;

  /**
   * Size of the loading spinner.
   * @keyof Sizes
   */
  size?: keyof typeof Sizes;
}
