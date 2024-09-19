import React from "react";
import { twMerge } from "tailwind-merge";

import { ILoadingProps, Sizes } from "./types";

const Loading = ({ className, size = "md" }: ILoadingProps) => (
  <div
    className={twMerge(
      " !border-t-black rounded-full border-slate-200 border-2 !border-t-2 animate-spin",
      Sizes[size],
      className
    )}
  />
);

export default Loading;
