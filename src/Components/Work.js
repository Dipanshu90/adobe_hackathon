import React from "react";
import banner from "../Assets/banner1.png";

// import BannerBackground from "../Assets/home-banner-background.png";
const Work = () => {
  const workInfoData = [
    {
      // image: PickMeals,
      title: "Template 1",
      text: "Creative",
    },
    {
      //image: ChooseMeals,
      title: "Template-2",
      text: "Professional",
    },
    {
      //image: DeliveryMeals,
      title: "Template-3",
      text: "Minimal",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <img className="work-image" src={banner} />
        <img className="work-image-chotu" src={banner} />
        <h1 className="work-primary-heading">Template Selection</h1>
        <div className="home-bannerImage-container">
          
        </div>
        <p className="primary-text">
        Choose from a variety of templates tailored to different industries. Each template is crafted to showcase your skills and experience.
        </p>
      </div>
      
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
