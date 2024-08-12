import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import BodyContent from "./Components/BodyContent";
import TopCategories from "./Components/TopCategories.jsx/TopCategories";
import Footer from "./Components/Footer/Footer";
import ReferalSection from "./Components/ReferalSection";
import ShopTheLook from "./Components/ShopTheLook";
import GreenRef from "./Components/GreenRef";
import TrendingNow from "./Components/TrendingNow";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <BodyContent />
      <TopCategories />
      <TrendingNow />
      <ReferalSection />
      <ShopTheLook />
      <GreenRef />
      <Footer />
    </div>
  );
};

export default App;
