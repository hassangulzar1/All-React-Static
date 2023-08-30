import React from "react";
import Cards from "./Cards";
const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-center bg-black text-light py-2">
          Static React Apps
        </h1>
      </div>
      <div className=" d-flex flex-wrap my-5 justify-content-center">
        <Cards img="Assets/Nordic.png" />
        <Cards img="Assets/Ninja.png" />
        <Cards img="Assets/BESNIK.png" />
        <Cards img="Assets/PAINTER.png" />
        <Cards img="Assets/BurgerKing.png" />
      </div>
    </div>
  );
};

export default Home;
