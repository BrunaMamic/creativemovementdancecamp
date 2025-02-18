import { Hero } from "@/components/hero";
import { InfiniteSlider } from "@/components/infiniteSlider";
import { TextSection } from "@/components/textSection";
import { TextSectionV2 } from "@/components/textSectionV2";

export default function Home() {
  return (
    <>
      <Hero />
      <TextSectionV2 />
      <InfiniteSlider />
      <TextSection />
    </>
  );
}
