import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    EcartDesc:
      "Developed a responsive eCommerce frontend using React.js and Bootstrap. Implemented a functional cart feature for managing products and ensuring a smooth user experience. The website is designed to be fully responsive and visually appealing across all devices..",
      EcartGithub: "https://github.com/YashShirdhankar/e-cart",
    EcartWebsite: "https://e-cart-website-taupe.vercel.app/",

    CarsDesc:
      "Created a dynamic web application using React.js and Tailwind CSS. Key features include customizable Dark and Light mode, responsive Navbar, and mobile-friendly Sidebar Navigation. The app is fully responsive with animated elements and a sleek, modern design..",
    CarsGithub: "https://github.com/YashShirdhankar/car-rental",
    CarsWebsite: "https://car-rental-yash.netlify.app",

    ColourPaletteDesc:
      "This website helps you generate random colours that you can use as a palette.The project helped me understand Javascript more deeply using advance techniques",
    ColourPaletteGithub: "https://github.com/EshaalB/Colour-palette-Generator",
    ColourPaletteWebsite: "https://colourpalettegen.netlify.app",

    WeatherAppDesc:
      "Developed a weather application using Python Flask and integrated a weather API. The app fetches real-time weather data and presents it through a clean, user-friendly interface. Designed to be fully responsive for seamless use across all devices.",
      WeatherAppGithub: "https://github.com/YashShirdhankar/weather-app",
    WeatherAppWebsite: "https://yash-website-6p3z.onrender.com",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
