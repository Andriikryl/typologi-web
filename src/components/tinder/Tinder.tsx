import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { bestsellersData } from "@/data/data";
import ProductCard from "../productCard/ProductCard";
export default function Tinder() {
  return (
    <section className={styles.tinder}>
      <Container>
        <div className={styles.tinder__box}>
          <div className={styles.tinder__info}>
            <h3 className={styles.tinder__title}>Tinted care</h3>
            <p className={styles.tinder__description}>
              Where skincare meets colour. Our tinted-care hybrids combine
              active ingredients like hyaluronic acid with natural pigments for
              long term skincare benefits and immediate colour payoff.
            </p>
            <p className={styles.tinder__description}>
              All our tinted care products are vegan, made in France, and
              suitable for each skin typology.
            </p>
          </div>
          <div className={styles.tinder__cards}>
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
