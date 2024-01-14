"use client";
import React from "react";
import { motion } from "framer-motion";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import styles from "./style.module.css";

interface DrawerProps {
  handleDismiss: () => void | boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ProductsNav({
  handleDismiss,
  children,
  style,
}: DrawerProps) {
  useEscapeKey(handleDismiss);
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <motion.div className={styles.wrapper} style={style} layout>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.drawer}>
            <div className={styles.list__box}>{children}</div>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              close
            </button>
          </div>
        </motion.div>
      </RemoveScroll>
    </FocusLock>
  );
}

function useEscapeKey(callback: () => void) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        callback();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
}
