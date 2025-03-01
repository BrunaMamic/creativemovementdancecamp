// import { Accomodation } from "@/components/accomodation";
import { Acordion } from "@/components/acordion";
import { CampIdea } from "@/components/campIdea";
import ContactForm from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero2 } from "@/components/hero2";
// import { InfiniteSlider } from "@/components/infiniteSlider";
import { Lineup } from "@/components/lineup";
import { Organizer } from "@/components/organizer";
import { Schedule } from "@/components/schedule";
import { TextSection } from "@/components/textSection";
// import { TextSection } from "@/components/textSection";
import { TextSectionV2 } from "@/components/textSectionV2";

export default function Home() {
  return (
    <>
      <Hero2 />
      <TextSectionV2 />
      <Lineup />
      <Schedule />
      <Acordion />
      <Organizer />
      <TextSection />
      <CampIdea />
      {/* <Accomodation />*/}
      <Faq />
      <ContactForm />
    </>
  );
}
