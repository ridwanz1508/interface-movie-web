// Footer.js
import React from "react";
import '../style/landingPage.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const footerLinksData = [
    { category: "For Business", links: ["Group", "Individual", "Community", "Sharing", "Others"] },
    { category: "Languages", links: ["English", "普通话", "عربي", "русский язык", "Indonesia"] },
    { category: "Company", links: ["About", "Contact", "Source", "Linked", "Press"] },
    { category: "Film Released", links: ["Antman", "Batman", "Superman", "Spiderman", "Avanger"] },
    { category: "Genres", links: ["Romance", "Action", "Comedy", "Drama", "Horror"] },
    { category: "Social Media", links: ["Facebook", "Twitter", "Instagram", "Linkedin", "Whatsapp"], 
      social: { 
        facebook: "#", 
        twitter: "#", 
        instagram: "#", 
        linkedin: "#", 
        whatsapp: "#" 
      } 
    },
  ];

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          {footerLinksData.map((section, index) => (
            <div key={index} className="sb__footer-links-div">
              <h4>{section.category}</h4>
              {section.links.map((link, linkIndex) => (
                <a key={linkIndex} href={`/${link.toLowerCase().replace(' ', '_')}`}>
                  <p>{link}</p>
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* Social Media Section */}
        <div className="sb__footer-links-div social-media-section">
          <h4>{footerLinksData[footerLinksData.length - 1].category}</h4>
          <div className="social-icons">
            <a href={footerLinksData[footerLinksData.length - 1].social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
            <span className="icon-spacing"></span> 
            <a href={footerLinksData[footerLinksData.length - 1].social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
            <span className="icon-spacing"></span> 
            <a href={footerLinksData[footerLinksData.length - 1].social.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
            <span className="icon-spacing"></span> 
            <a href={footerLinksData[footerLinksData.length - 1].social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} /></a>
            <span className="icon-spacing"></span> 
            <a href={footerLinksData[footerLinksData.length - 1].social.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
