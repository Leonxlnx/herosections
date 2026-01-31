import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroGrid from "./components/HeroGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroGrid />
      </main>
      <Footer />
    </>
  );
}
