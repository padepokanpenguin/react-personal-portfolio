import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Logo from "./components/Logo/Logo";
import Passion from "./components/Passion/Passion";
import Portfolio from "./components/Portfolio/Portfolio";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <div>
      <Logo />
      <Welcome />
      <Passion />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
