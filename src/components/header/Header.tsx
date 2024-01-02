import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav/Nav";
import HeaderControls from "./headerControls/HeaderControls";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>
          <Nav />
          <Link href={"/"}>
            <Image
              src="/logo/logo.svg"
              width={140}
              height={51}
              alt="Typology paris"
            />
          </Link>
          <div>
            <HeaderControls />
          </div>
        </div>
      </Container>
    </header>
  );
}
