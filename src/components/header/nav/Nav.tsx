import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const dataNavLinks = [
  {
    id: 1,
    title: "Products",
    href: "/products",
  },
  {
    id: 2,
    title: "Diagnostic",
    href: "/diagnostic",
  },
  {
    id: 3,
    title: "ABOUT",
    href: "/about",
  },
];

export default function Nav() {
  return (
    <nav>
      <ul role="list" className={styles.list}>
        {dataNavLinks.map(({ id, title, href }) => {
          return (
            <li key={id}>
              <Link className={styles.list__link} href={href}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
