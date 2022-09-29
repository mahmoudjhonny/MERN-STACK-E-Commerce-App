import React from "react";
import Announcement from "../Components/Announcement";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Slider from "../Components/Slider";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
