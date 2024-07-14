import React from "react";
import ProjectBox from "./ProjectBox";
import CarsImage from "../images/cars.png";
import EcartImage from "../images/ecart.png";
import WeatherImage from "../images/weather.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={EcartImage} projectName="Ecart" />
        <ProjectBox projectPhoto={CarsImage} projectName="Cars" />
        
        <ProjectBox projectPhoto={WeatherImage} projectName="WeatherApp" />
      </div>
    </div>
  );
};

export default Projects;
