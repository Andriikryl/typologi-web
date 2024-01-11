"use client";
import React, { useRef } from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import ProductCard from "../productCard/ProductCard";
import { bestsellersData } from "@/data/data";
import { motion, useScroll, useTransform } from "framer-motion";


export default function Bestsellers() {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const randomTransform = () => {
    const transforms = [sm, md, lg];
    const randomIndex = Math.floor(Math.random() * transforms.length);
    return transforms[randomIndex];
  };

  const ys = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.floor(Math.random() * -375) - 85]
  );
  return (
    <section ref={section} className={styles.bestsellers}>
      <Container className={styles.bestsellers__container}>
        <motion.p style={{ y: lg }} className={styles.bestsellers__description}>
          Our products are <span> Vegan, Cruelty-free, Made in France</span>
        </motion.p>
        <div className={styles.line}></div>
        <motion.h2 style={{ y: md }} className={styles.bestsellers__title}>
          Bestsellers
        </motion.h2>
        <div className={styles.cards__wrapper}>
          <motion.div style={{ y: sm }}>
            <ProductCard
              size="lg"
              src="/bestsellers/item1.jpg"
              description="Best-seller"
              info="Radiance Night Serum
            Botanical Blend With White Rose — from 26,50 €"
              width={564}
              height={692}
            />
          </motion.div>
          <div className={styles.md__wrapper}>
            {bestsellersData.map(
              ({ id, size, src, description, info, width, height }) => {
                return (
                  <motion.div key={id} style={{ y: randomTransform() }}>
                    <ProductCard
                      size={size}
                      src={src}
                      description={description}
                      info={info}
                      width={width}
                      height={height}
                    />
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
