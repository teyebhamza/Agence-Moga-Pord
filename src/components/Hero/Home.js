import React from "react"
import "./Home.css"
import hero from "../pic/digitalpic5.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME </h3>
            <h1>
              Hi, With Mogaprod <span> You Will Find</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Digital Marketing.", " Web development.", " Shooting Products.", " SEO.", " Graphic Design ."]} loop cursor cursorStyle='|' typeSpeed={30} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>Marketing diagnosis, strategic planning or tailor-made tactical action plan: our strategists guide and advise you. We also offer support programs and coaching.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Our Social Media</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home