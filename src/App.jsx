import "./App.scss";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/hero/Hero";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">Parallex</section>
    <section>Services</section>
    <section id="Portfolio">Parallex</section>
    <section>Portfolio01</section>
    <section>Portfolio02</section>
    <section>Portfolio03</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
