import React from "react"
import logo1 from "../pic/en noir 2 (1).png"

const Footer = () => {
  return (
    <>
      <footer>
     <div className=' Footetr_conatiner '> 
     <hr/> 
        <div className='conatiner text-center top'>
        <div className='footer'>
              <div className='footer_link'>
                
                <div className='button'>
                  <button className='btn_shadow'>
                  <a href="https://www.facebook.com/profile.php?id=100083637300901"> <i class='fab fa-facebook-f'></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://www.instagram.com/mogaprod.agency/"><i class='fab fa-instagram'></i></a>
                  </button>
                  <button className='btn_shadow'>
                  <a href="https://www.instagram.com/mogaprod.agency/">  <i class='fab fa-linkedin-in' ></i></a>
                  </button>
                </div>
        </div>
        </div>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2023. All rights reserved by Moagaprod.</p>
        </div>
        </div>  
      </footer>
    </>
  )
}

export default Footer