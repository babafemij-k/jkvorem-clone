import "./App.css";
import ParticlesComponent from "./components/Particles";
import Particles from "./components/Particles";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <ParticlesComponent />
      <NavBar />
      <Header />
      <Products />
      <AboutUs />
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
