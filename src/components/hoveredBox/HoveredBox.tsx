"use client";
import React, { ReactNode, useState } from "react";

interface HoveredBoxProps {
  children: ReactNode;
}

export default function HoveredBox({ children }: HoveredBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {children}
    </div>
  );
}
