import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HeaderControls() {
  return (
    <ul role="list" className={styles.list}>
      <li>
        <Link href={"/"} className={styles.list__link}>
          <Image
            src="/navigateIcons/search.svg"
            width={16}
            height={16}
            alt="Typology paris"
          />
        </Link>
      </li>
      <li>
        <Link className={styles.list__link} href={"/"}>
          Global
        </Link>
      </li>
      <li>
        <Link className={styles.list__link} href={"/"}>
          Login
        </Link>
      </li>
      <li>
        <Link className={styles.list__link} href={"/"}>
          <Image
            src="/navigateIcons/heart.svg"
            width={16}
            height={16}
            alt="Typology paris"
          />
        </Link>
      </li>
      <li>
        <Link className={styles.list__link} href={"/"}>
          cart
        </Link>
      </li>
    </ul>
  );
}
