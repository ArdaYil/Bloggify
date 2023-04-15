import NavBar from "../components/NavBar";
import Hero from "../components/homepage/Hero";
import ThemeInfo from "../components/homepage/ThemeInfo";
import Information from "../components/homepage/Information";
import Footer from "../components/Footer";
import About from "../components/homepage/About";
import Benefits from "../components/homepage/Benefits";

export default function HomePage() {
  return (
    <>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main className="main">
        <ThemeInfo />
        <Information />
        <About />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
