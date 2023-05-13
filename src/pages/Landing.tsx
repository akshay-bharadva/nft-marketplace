import { Profiler } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

const Landing = () => {
  return (
    <Profiler id="Landing-Page" onRender={() => {}}>
      <Header />
      <Hero />
      <Footer />
    </Profiler>
  );
};

export default Landing;
