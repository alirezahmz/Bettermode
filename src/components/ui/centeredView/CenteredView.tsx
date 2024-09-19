import React from "react";
import { twMerge } from "tailwind-merge";

import { ICenteredViewProps } from "./types";

const CenteredView = ({ className, children }: ICenteredViewProps) => (
  <div className={twMerge("h-screen flex items-center justify-center", className)}>{children}</div>
);

export default CenteredView;
