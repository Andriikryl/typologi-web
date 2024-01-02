import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero__box}>
          <h1 className={styles.hero__title}>NEW: SPF 50</h1>
          <p className={styles.hero__description}>SUNSCREENS FOR FACE + BODY</p>
        </div>
      </Container>
    </section>
  );
}
