import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ToolsBand } from "@/components/ToolsBand";
import { Redesigns } from "@/components/Redesigns";
import { FeaturedWork } from "@/components/FeaturedWork";
import { MoreWork } from "@/components/MoreWork";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ToolsBand />
        <Redesigns />
        <FeaturedWork />
        <MoreWork />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
