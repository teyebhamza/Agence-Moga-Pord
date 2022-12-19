import React from 'react'
import "./Reasons.css"
import tick from "../../assets/tick.png";
import image from "../../assets/digitalpic5.jpg";




const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
        <div className="left-r">
            <img src={image} alt="" />
            
        </div>

        <div className="right-r">
          <span>Some Reasons</span>
          <div>
          <span> Whay </span>
          <span > Choose Us </span>
          </div>

          
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>For more than 3 years we have been evolving in the web and digital marketing and offer our customers solutions that meet their needs and their projects without trying to sell them anything and everything. We prefer to build loyalty through the quality of our services and support than through purely contractual notions.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>The major asset of our digital marketing agency Moga Prod is undoubtedly the quality of our technical support, which combines both responsiveness and efficient responses.</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Working as a team for positive outcomes</span>
          </div>
         
        </div>
        
      </div>
    </div>
  )
}

export default Reasons