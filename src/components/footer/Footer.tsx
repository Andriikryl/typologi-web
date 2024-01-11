import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";
const aboutFooterData = [
  {
    id: "1",
    title: "Our history",
  },
  {
    id: "2",
    title: "Formulation charter",
  },
  {
    id: "3",
    title: "Packaging philosophy",
  },
  {
    id: "4",
    title: "Customer reviews",
  },
  {
    id: "5",
    title: "Jobs",
  },
  {
    id: "6",
    title: "Affiliation",
  },
];
const helpFooterData = [
  {
    id: "1",
    title: "Frequently asked questions",
  },
  {
    id: "2",
    title: "Shipping and returns",
  },
  {
    id: "3",
    title: "Terms of sales",
  },
  {
    id: "4",
    title: "Get in touch",
  },
  {
    id: "5",
    title: "Privacy policy",
  },
];
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <h3 className={styles.footer__title}>
          We investigate the right ingredients for each skin typology. Our
          formulations are concise, concentrated, and made in France.
        </h3>
        <div className={styles.content__wrapper}>
          <div className={styles.footer__nav}>
            <h4 className={styles.nav__title}>About</h4>
            <ul className={styles.nav__list} role="list">
              {aboutFooterData.map(({ title, id }) => {
                return (
                  <li key={id} className={styles.nav__item}>
                    <Link className={styles.nav__link} href={"#"}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.footer__nav}>
            <h4 className={styles.nav__title}>Help</h4>
            <ul className={styles.nav__list} role="list">
              {helpFooterData.map(({ title, id }) => {
                return (
                  <li key={id} className={styles.nav__item}>
                    <Link className={styles.nav__link} href={"#"}>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.bootom__footer}>
          <p className={styles.description}>
            Typology products are free from Parabens, Phenoxyethanol, Paraffin
            Oil and Sulphates.
          </p>
          <p className={styles.description}>
            Read our full ingredient blacklist here
          </p>
        </div>
      </Container>
    </footer>
  );
}
