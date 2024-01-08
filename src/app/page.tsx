import Hero from "@/components/hero/Hero";
import Bestsellers from "@/components/bestsellers/Bestsellers";
import ContactBlock from "@/components/contactBlock/ContactBlock";
import Tinder from "@/components/tinder/Tinder";
import Undesrstand from "@/components/understand/Undesrstand";
import Arrivals from "@/components/arrivals/Arrivals";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <ContactBlock />
      <Tinder />
      <Undesrstand />
      <Arrivals />
      <Reviews/>
    </>
  );
}
