import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import clsx from "clsx";

interface ProductCardProps {
  description: string;
  src: string;
  width: number;
  height: number;
  info: string;
  size: string;
}

export default function ProductCard({
  description,
  src,
  width,
  height,
  info,
  size,
}: ProductCardProps) {
  return (
    <article
      className={clsx(styles.list__item, {
        [styles.lg__card]: size === "lg",
        [styles.md__card]: size === "md",
      })}
    >
      <p className={styles.item__descitpion}>{description}</p>
      <div>
        <Image src={src} width={width} height={height} alt="image" />
      </div>
      <p className={styles.list__info}>{info}</p>
    </article>
  );
}
