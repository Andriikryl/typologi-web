import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import ProductCard from "../productCard/ProductCard";
import { bestsellersData } from "@/data/data";

export default function Bestsellers() {
  return (
    <section className={styles.bestsellers}>
      <Container className={styles.bestsellers__container}>
        <p className={styles.bestsellers__description}>
          Our products are <span> Vegan, Cruelty-free, Made in France</span>
        </p>
        <div className={styles.line}></div>
        <h2 className={styles.bestsellers__title}>Bestsellers</h2>
        <div>
          <ProductCard
            size="lg"
            src="/bestsellers/item1.jpg"
            description="Best-seller"
            info="Radiance Night Serum
            Botanical Blend With White Rose — from 26,50 €"
            width={564}
            height={692}
          />
          <div>
            {bestsellersData.map(
              ({ id, size, src, description, info, width, height }) => {
                return (
                  <ProductCard
                    key={id}
                    size={size}
                    src={src}
                    description={description}
                    info={info}
                    width={width}
                    height={height}
                  />
                );
              }
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
