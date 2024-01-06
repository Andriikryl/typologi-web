import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import ContactBlock from "@/components/contactBlock/ContactBlock";
import Tinder from "@/components/tinder/Tinder";
import Undesrstand from "@/components/understand/Undesrstand";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <ContactBlock />
      <Tinder />
      <Undesrstand />
    </>
  );
}
