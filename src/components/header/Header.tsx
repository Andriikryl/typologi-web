import React from "react";
import styles from "./style.module.css";
import { Container } from "../container/Container";
import Link from "next/link";
import Image from "next/image";


export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__box}>

          <Link href={"/"}>
            <Image
              src="/logo/logo.svg"
              width={140}
              height={51}
              alt="Typology paris"
            />
          </Link>
          <div>
            <ul>
              <li>
                <Link href={"/"}>
                  <Image
                    src="/navigateIcons/search.svg"
                    width={16}
                    height={16}
                    alt="Typology paris"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>Global</Link>
              </li>
              <li>
                <Link href={"/"}>Login</Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Image
                    src="/navigateIcons/heart.svg"
                    width={16}
                    height={16}
                    alt="Typology paris"
                  />
                </Link>
              </li>
              <li>
                <Link href={"/"}>cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
