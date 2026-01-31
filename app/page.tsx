import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroGrid from "./components/HeroGrid";
import Footer from "./components/Footer";

async function getGitHubStars(): Promise<number> {
  try {
    const res = await fetch(
      "https://api.github.com/repos/Leonxlnx/herosections",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const stars = await getGitHubStars();

  return (
    <>
      <Header stars={stars} />
      <main>
        <Hero />
        <HeroGrid />
      </main>
      <Footer />
    </>
  );
}
