import React from 'react'
import vg from "../assets/2.png"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>We are your one and only solution to tech problems
             you face every day. 
             We are leading tech company 
             who aims to increase the problem 
             solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>We're a tech-savvy team dedicated to providing 
            top-notch solutions. With a focus on innovation, 
            we offer expert technical services tailored to 
            your needs. Our goal is simple: to streamline 
            operations and elevate your digital experience. 
            Backed by a wealth of experience, we're committed 
            to delivering reliable and cutting-edge solutions. 
            Trust us to be your partner in navigating the complexities 
            of technology</p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>

            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

            <div style={{
              animationDelay:"1s"
            }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home