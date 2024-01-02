import React from 'react'
import styles from "./style.module.css"
import Link from 'next/link'
import Image from 'next/image'

export default function HeaderControls() {
  return (
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
  )
}
