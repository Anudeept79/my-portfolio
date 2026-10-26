import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ToolsBand } from "@/components/ToolsBand";
// import { Redesigns } from "@/components/Redesigns"; // hidden for now
import { FeaturedWork } from "@/components/FeaturedWork";
import { MoreWork } from "@/components/MoreWork";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ToolsBand />
        {/* <Redesigns /> — hidden for now; component + data left intact */}
        <FeaturedWork />
        <MoreWork />
        {/* Testimonials hidden until real, verbatim quotes replace the drafts (see site.ts). */}
      </main>
      <Footer />
    </>
  );
}
