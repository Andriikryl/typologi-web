import React from "react";
import { Container } from "../container/Container";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import Graph from "../graph/Graph";

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <Container>
        <div className={styles.flex__group}>
          <div className={styles.reviews__info}>
            <Graph from={1} to={5} step={1} classGraph={styles.star__wrapper}>
              <Image src="/icons/star.svg" width={10} height={10} alt="star" />
            </Graph>
            <h3 className={styles.reviews__title}>32231 five- star reviews.</h3>
            <p className={styles.reviews__description}>
              Our overall rating is 4.2 out of 5 stars from over 53794 reviews.
            </p>
            <p className={styles.reviews__description}>Sandra R. Mathé G.</p>
            <p className={styles.reviews__description}>
              Age range (45-54 years old) — Sensitive skin
            </p>
            <Graph from={1} to={5} step={1} classGraph={styles.star__wrapper}>
              <Image src="/icons/star.svg" width={10} height={10} alt="star" />
            </Graph>
            <p className={styles.reviews__description}>
              After 5 weeks of use, my lashes have grown stronger and bigger. I
              can see a lot of regrowth. My eyebrow tails, which were very
              sparse, have grown back almost completely. It is necessary to be
              very constant in the use of this care and the result is there. I
              highly recommend it and without hesitation bravo Typologie
            </p>
            <p className={styles.date}>June 22, 2022</p>
            <p className={styles.reviews__description}>
              About Lip Plumping Serum - with Hyaluronic acid 1% + Tripeptide
            </p>
            <Link className={styles.reviews__more} href={"#"}>
              READ MORE REVIEWS
            </Link>
          </div>
          <div>
            <Image
              src="/reviews/content.jpg"
              width={948}
              height={762}
              alt="image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
