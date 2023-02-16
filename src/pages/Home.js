import Header from "../components/Header";
import H1 from "../components/H1";
import Introduce from "../components/Introduce";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Tmi from "../components/Tmi";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <H1 />
      <div className="bg-wrap">
        <div className="bg"></div>
      </div>
      <Introduce />
      <Skills />
      <Portfolio />
      <Tmi />
      <Footer />
    </>
  );
};

export default Home;
