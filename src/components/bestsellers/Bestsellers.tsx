import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Image from "next/image";
export default function Bestsellers() {
  return (
    <section className={styles.bestsellers}>
      <Container className={styles.bestsellers__container}>
        <p className={styles.bestsellers__description}>
          Our products are <span> Vegan, Cruelty-free, Made in France</span>
        </p>
        <div className={styles.line}></div>
        <h2 className={styles.bestsellers__title}>Bestsellers</h2>
        <ul role="list">
          <li className={styles.list__item}>
            <p className={styles.item__descitpion}>Best-seller</p>
            <div>
              <Image
                src="/bestsellers/item1.jpg"
                width={564}
                height={692}
                alt="image"
              />
            </div>
            <p className={styles.list__info}>Radiance Night Serum</p>
            <p className={styles.list__info}>
              Botanical Blend With White Rose — from 26,50 €
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
