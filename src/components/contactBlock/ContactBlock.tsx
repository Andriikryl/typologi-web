import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";

export default function ContactBlock() {
  return (
    <section className={styles.contact__section}>
      <Container>
        <div className={styles.contact__box}>
          <h3 className={styles.contact__title}>
            For My face I’m looking for any product that targets any concern
          </h3>
          <button className={styles.contact__button}>
            discover your match
          </button>
        </div>
      </Container>
    </section>
  );
}
