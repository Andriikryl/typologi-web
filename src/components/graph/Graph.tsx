import React, { ReactNode } from "react";
import { range } from "../../utils/range";
import style from "./style.module.css";

interface GraphProps {
  from: number;
  to: number;
  step: number;
  classGraph?: string;
  classReng?: string;
  children?: ReactNode;
}

export default function Graph({
  from,
  to,
  step,
  classGraph,
  classReng,
  children,
}: GraphProps) {
  return (
    <div className={classGraph}>
      {range(from, to + 1, step).map((num) => (
        <div key={num} className={classReng}>
          {children}
        </div>
      ))}
    </div>
  );
}
