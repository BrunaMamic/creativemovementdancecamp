import { Hero2 } from "@/components/hero2";
import { InfiniteSlider } from "@/components/infiniteSlider";
import { Lineup } from "@/components/lineup";
import { Schedule } from "@/components/schedule";
// import { TextSection } from "@/components/textSection";
import { TextSectionV2 } from "@/components/textSectionV2";

export default function Home() {
  return (
    <>
      <Hero2 />
      {/* <Hero /> */}
      <TextSectionV2 />
      <InfiniteSlider />
      {/* <TextSection /> */}
      <Lineup />
      <Schedule />
    </>
  );
}
