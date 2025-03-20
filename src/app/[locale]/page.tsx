import { Accomodation } from "@/components/accomodation";
import { Acordion } from "@/components/acordion";
import { CampIdea } from "@/components/campIdea";
import ContactForm from "@/components/contact";
import CounterTime from "@/components/countdown";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero2 } from "@/components/hero2";
import { Lineup } from "@/components/lineup";
import Navbar from "@/components/navbar";
import { Organizer } from "@/components/organizer";
import { Schedule } from "@/components/schedule";
import { Studio } from "@/components/studio";
import { TextSection } from "@/components/textSection";
import { TextSectionV2 } from "@/components/textSectionV2";
import { Map } from "@/components/maps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <TextSectionV2 />
      <CounterTime />
      <Lineup />
      <Schedule />
      <Acordion />
      <Organizer />
      <TextSection />
      <CampIdea />
      <Accomodation />
      <Map />
      <Studio />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
}
