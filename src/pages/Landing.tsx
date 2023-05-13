import { Profiler } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Trending from "../components/Trending/Trending";
import Explore from "../components/Explore/Explore";

const Landing = () => {
  return (
    <Profiler id="Landing-Page" onRender={() => {}}>
      <Header />
      <Hero />
      <Trending />
      <Explore />
      <Footer />
    </Profiler>
  );
};

export default Landing;
