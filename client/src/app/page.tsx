import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Education from "@/components/Education";
import Work from "@/components/Work";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-screen flex flex-col">
        <Hero />
        <Education />
        <Work />
        <BlogPreview />
        <Footer />
      </div>
    </div>
  );
}
