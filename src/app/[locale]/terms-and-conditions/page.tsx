import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import TermsConditions from "@/components/terms";

export default function Terms() {
  return (
    <>
      <Navbar />
      <TermsConditions />
      <Faq />
      <Footer />
    </>
  );
}
