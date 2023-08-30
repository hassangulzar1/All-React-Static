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
        <Cards
          link="https://nordic-roses-react-static.vercel.app/"
          desc="Full Responsive Figma To React-Static"
          name="Nordic Roses"
          sourceLink="https://github.com/hassangulzar1/NordicRoses-React-Static.git"
          img="Assets/Nordic.png"
        />
        <Cards
          link="https://ninja-mail-react-static.vercel.app/"
          desc="Full Responsive Figma To React-Static"
          name="Ninja Mail"
          sourceLink="https://github.com/hassangulzar1/NinjaMail-React-Static.git"
          img="Assets/Ninja.png"
        />
        <Cards
          link="https://besnik-real-estate-react-static.vercel.app/"
          desc="Full Responsive Figma To React-Static"
          name="Besnik Real-Estate"
          sourceLink="https://github.com/hassangulzar1/Besnik-RealEstate-React-static.git"
          img="Assets/BESNIK.png"
        />
        <Cards
          link="https://painter-website.vercel.app/"
          desc="Full Responsive Figma To React-Static"
          name="Painter Paints"
          sourceLink="https://github.com/hassangulzar1/painterwebsite-React-Static.git"
          img="Assets/PAINTER.png"
        />
        <Cards
          link="https://school-courses-react-static.vercel.app/"
          desc="Full Responsive Figma To React-Static"
          name="E-School"
          sourceLink="https://github.com/hassangulzar1/SchoolCourses-React-Static.git"
          img="Assets/E-SCHOOL.png"
        />
        <Cards
          link="https://burger-website-react-static.vercel.app/"
          desc="50% Responsive Figma To React-Static"
          name="Burger-King"
          sourceLink="https://github.com/hassangulzar1/BurgerWebsite-React-Static.git"
          img="Assets/BURGER.png"
        />
      </div>
    </div>
  );
};

export default Home;
