import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <BlogPreview />
        <Footer />
      </div>
    </div>
  );
}
