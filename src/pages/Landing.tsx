import { Profiler } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Landing = () => {
  return (
    <Profiler id="Landing-Page" onRender={() => {}}>
      <Header />
      <Hero />
    </Profiler>
  );
};

export default Landing;
