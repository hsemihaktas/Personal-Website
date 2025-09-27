import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="absolute inset-0 bg-primary-dark/70 z-0"></div>
      <div className="relative z-10 flex h-full grow flex-col">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}
