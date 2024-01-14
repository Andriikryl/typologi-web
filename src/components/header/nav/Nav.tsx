"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { dataNavLinks } from "@/data/data";
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
          <li className={styles.list__link} onClick={handleClick}>
            products
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
            // style={{ transform: `translateX(${translateX})` }}
          >
            <ul className={styles.navigationList}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Photographers</a>
              </li>
              <li>
                <a href="">Submit Work</a>
              </li>
            </ul>
          </ProductsNav>
        )}
      </AnimatePresence>
    </>
  );
}
