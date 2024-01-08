import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import { bestsellersData } from "@/data/data";
import ProductCard from "../productCard/ProductCard";

export default function Arrivals() {
  return (
    <section className={styles.arrivals}>
      <Container>
        <h3 className={styles.arrivals__title}>New Arrivals</h3>
        <div className={styles.arrival__box}>
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
      </Container>
    </section>
  );
}
