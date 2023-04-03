import NavBar from "../components/NavBar";
import Hero from "../components/homepage/Hero";

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main className="main"></main>
      <footer></footer>
    </>
  );
}
