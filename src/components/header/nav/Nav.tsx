"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { dataNavLinks, dataProductLinks } from "@/data/data";
import { AnimatePresence } from "framer-motion";
import ProductsNav from "../products/ProductsNav";

export default function Nav() {
  const [activeState, setActiveState] = useState(false);
  const translateX = activeState ? "0%" : "100%";
  const handleClick = () => {
    setActiveState((prev) => !prev);
  };
  return (
    <>
      <nav>
        <ul role="list" className={styles.list}>
          <li onClick={handleClick}>
            <Link href={"#"} className={styles.list__link}>
              Products
            </Link>
          </li>
          {dataNavLinks.map(({ id, title, href }) => {
            return (
              <li key={id}>
                <Link className={styles.list__link} href={href}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <AnimatePresence>
        {activeState && (
          <ProductsNav
            handleDismiss={handleClick}
            style={{ transform: `translateX(${translateX})` }}
          >
            <ul className={styles.product__list} role="list">
              {dataProductLinks.map(({ id, title, href }) => {
                return (
                  <li key={id} className={styles.product__item}>
                    <Link className={styles.product__link} href={href}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ProductsNav>
        )}
      </AnimatePresence>
    </>
  );
}
