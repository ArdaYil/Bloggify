import NavBar from "../components/NavBar";
import Hero from "../components/homepage/Hero";
import ThemeInfo from "../components/homepage/ThemeInfo";

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main className="main">
        <ThemeInfo />
      </main>
      <footer></footer>
    </>
  );
}
