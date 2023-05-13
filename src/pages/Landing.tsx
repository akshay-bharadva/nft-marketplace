import { Profiler } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Trending from "../components/Trending/Trending";

const Landing = () => {
  return (
    <Profiler id="Landing-Page" onRender={() => {}}>
      <Header />
      <Hero />
      <Trending />
      <Footer />
    </Profiler>
  );
};

export default Landing;
