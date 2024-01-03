import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Bestsellers from "@/components/bestsellers/Bestsellers";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestsellers />
    </>
  );
}
