import Description from "./ui/home/Description";
import Hero from "./ui/home/Hero";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#1a1512] to-[#53493f] ">
      <Hero />
      <Description />
    </main>
  );
}
