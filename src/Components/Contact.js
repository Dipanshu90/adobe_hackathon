import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    template_id: "",
    NAME: "",
    email_address: "",
    phone_number: "",
    linkedin_url: "",
    job_title: "",
    career_objective: "",
    skills: "",
    education: "",
    experience: "",
    achievements: "",
  });

  const handleInputChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCreatePDF = async () => {
    try {
      const instance = axios.create({baseURL: 'http://localhost:3001'});

      const response = await instance.post(
        "/create-pdf",
        formData,
        {
          responseType: "blob",
        }
      );

      // Create a download link for the PDF
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="contact-primary-heading">Input Personal Information</h1>
      <p className="contact-heading">Template_Id</p>
      <div className="contact-form-container">
        <input
          type="string"
          name="template_id"
          placeholder="Template ID"
          value={formData.template_id}
          onChange={handleInputChange}
        />
      </div>
      <p className="contact-heading">Personal Information</p>
        <div className="personal-info-container">
          <div className="name">
            <input
              type="text"
              name="NAME"
              placeholder="Name"
              value={formData.NAME}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email_address"
              placeholder="Email Address"
              value={formData.email_address}
              onChange={handleInputChange}
            />
          </div>
          <div className="name">
            <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={formData.phone_number}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="linkedin_url"
              placeholder="LinkedIn URL"
              value={formData.linkedin_url}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <p className="contact-heading">Job Title</p>
        <div className="contact-form-container">
          <input
            type="text"
            name="job_title"
            placeholder="Job Title"
            value={formData.job_title}
            onChange={handleInputChange}
          />
        </div>
        <p className="contact-heading">Career Objective</p>
        <div className="contact-form-container">
          <input
            type="text"
            name="career_objective"
            placeholder="Career Objective"
            value={formData.career_objective}
            onChange={handleInputChange}
          />
        </div>
        <p className="contact-heading">Skills</p>
        <div className="contact-form-container">
          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>
        <p className="contact-heading">Education</p>
        <div className="contact-form-container">
          <input
            type="text"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleInputChange}
          />
        </div>
        <p className="contact-heading">Experience</p>
        <div className="contact-form-container">
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>
        <p className="contact-heading">Achievements</p>
        <div className="contact-form-container">
          <input
            type="text"
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleInputChange}
          />
        </div>
      <button className="secondary-button" onClick={handleCreatePDF}>
        Create PDF
      </button>
    </div>
  );
};

export default Contact;