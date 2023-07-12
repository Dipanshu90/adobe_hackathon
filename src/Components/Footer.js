import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
         <AssignmentIcon className="footer-icon" style={{ fontSize: '45px',color: '#4C4C4C' }}/>
         <h1 className="footer-para">Easy Resume Generator</h1>
        </div>
        <div className="footer-icons">
          <BsTwitter className="footer-icon" style={{ fontSize: '30px',color: '#00acee' }} />
          <SiLinkedin className="footer-icon" style={{ fontSize: '30px',color: '#0A66C2' }} />
          <BsYoutube className="footer-icon" style={{ fontSize: '30px',color: 'red' }} />
          <FaFacebookF className="footer-icon" style={{ fontSize: '30px',color: '#3b5998' }}/>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          
          <span>Help</span>
          <span>Share</span>
          
        </div>
        
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
