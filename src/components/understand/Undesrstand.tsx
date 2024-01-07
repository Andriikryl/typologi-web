"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import clsx from "clsx";
import HoveredBox from "../hoveredBox/HoveredBox";

export default function Undesrstand() {
  return (
    <section className={styles.understand}>
      <Container className={styles.understand__container}>
        <div className={styles.understand__box}>
          <p className={styles.understand__description}>Diagnostic</p>
         
            <h3 className={styles.understand__title}>
              Understand your skin and its complex needs.
            </h3>
          <p className={styles.understand__description}>
            Begin diagnostic test
          </p>
        </div>
      </Container>
    </section>
  );
}
