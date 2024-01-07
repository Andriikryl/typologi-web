"use client";
import React, { ReactNode, useState } from "react";

interface HoveredBoxProps {
  children: ReactNode;
  onHoverChange: any;
}

export default function HoveredBox({
  children,
  onHoverChange,
}: HoveredBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
