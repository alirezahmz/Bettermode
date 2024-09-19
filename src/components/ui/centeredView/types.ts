import { ReactNode } from "react";

export interface ICenteredViewProps {
  /**
   * Custom CSS class name(s) to apply to the loading spinner.
   */
  className?: string;

  /**
   * Render children .
   */
  children: ReactNode;
}
