import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram (1).png"
import LinkedIn from "../../assets/linkedin.png"
import Facebook from "../../assets/facebook (1).png"
import Logo from "../../assets/IMAGEE/en noir 2 (1).png"

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr/> 
      <div className="footer">
         <div className="social-links">
            <a alt="instagram" href="https://www.facebook.com/profile.php?id=100083637300901"> <img src={Facebook} alt=""/></a>
            <a alt="instagram" href="https://www.instagram.com/mogaprod.agency/"> <img src={Instagram} alt=""/></a>
            <a alt="instagram" href="https://www.instagram.com/mogaprod.agency/"> <img src={LinkedIn} alt=""/></a>
            <a alt="instagram" href="https://www.instagram.com/mogaprod.agency/"> <img src={Github} alt=""/></a>
           
         </div>
          <div className="logo-f">
            <img src={Logo} alt=""/> 
          </div>
          <div className="footer-text">
       
        <span>Created by <span style={{color: 'var(--orange)'}}>Moga Prod</span> @All Rights Reserved</span>
        </div>
          <div className="blur blur-f-1"></div>
          <div className="blur blur-f-2"></div>
      </div>
      
     
    </div>
  )
}

export default Footer