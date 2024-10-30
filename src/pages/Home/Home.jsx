import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Cards from "../../components/Cards/Card";
import Comp from "../../components/Comp/Comp";
import Footer from "../../components/Footer/Footer";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-container">
        <Cards
          image={<FaApple className="card-icons" />}
          title="iOS App"
          text="Create, browse and save palettes on the go."
        />
        <Cards
          image={<IoLogoAndroid />}
          title="Android App"
          text="Create, browse and save palettes on the go."
        />
        <Cards
          image={<FaApple />}
          title="Figma Plugin"
          text="Create, browse and save palettes on the go."
        />
        <Cards
          image={<FaApple />}
          title="Chrome Extention"
          text="Create, browse and save palettes on the go."
        />
        <Cards
          image={<FaApple />}
          title="Abode Extention"
          text="Create, browse and save palettes on the go."
        />
      </div>
      <Comp />
      <Footer />
    </div>
  );
}

export default Home