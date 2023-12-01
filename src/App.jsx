import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Parallax from "./Components/Parallex/parallax";
import Hero from "./Components/hero/Hero";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section>Services</section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio01</section>
    <section>Portfolio02</section>
    <section>Portfolio03</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
