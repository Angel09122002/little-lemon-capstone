import React from "react";
import Hero from "../components/hero/Hero";
import Specials from "../components/specials/Specials";
import NavBar from "../components/navbar/Navbar";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero/>
      <Specials />
    </>
  );
};

export default Home;
