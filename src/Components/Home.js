import React from "react";
import banner from "../Assets/banner1.png";
import BannerImage from "../Assets/home-resume-background.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={banner} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Resume Builder
          </h1>
          <p className="primary-text">
            Welcome to our platform where we make it easy for you to generate personalized resumes. Choose one of our many professional templates and customize it with your personal details.
          </p>
        </div>
        <div className="home-image-section">
          <img className = "home-image" src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
