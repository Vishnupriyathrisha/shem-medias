import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Results from "./components/Results";
import Process from "./components/Process";
import Media from "./components/Media";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <WelcomeScreen />
      <Navbar />

      <Home />
      <About />
      <Services />
      <Results />
      <Process />
      <Media />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;