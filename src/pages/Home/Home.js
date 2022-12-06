import React, { useContext } from "react";
import CallToAction from "../../components/Home/CallToAction/CallToAction";
import Reviews from "../../components/Home/Reviews/Reviews";
import Slider from "../../components/Home/Slider/Slider";
import State from "../../components/Home/State/State";
import Products from "../../components/Products/Products";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Home = () => {
  const { setTitle } = useContext(AuthContext);

  setTitle("Home");

  return (
    <div className="flex flex-col gap-20">
      <Slider />
      <State />
      <Products />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default Home;
