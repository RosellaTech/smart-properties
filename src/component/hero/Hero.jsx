import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";
import {motion} from "framer-motion";


const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/*left side*/}

        <div className="flexColStart hero-left ">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 
            initial={{y: "2rem",opacity:0}}
            animate={{y: 0, opacity:1}}
            transition={{
              duration:2,
              type: "spring"
            }}
            >
              Discover <br />
              Most Suitable <br /> Property In Lekki
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find the perfect luxury home in Lekki & Ikoyi. Exclusive
              properties with modern designs.
            </span>
            <span className="secondaryText">
              Gated estates with 24/7 security. Prime locations, top
              infrastructure and top security
            </span>
          </div>

          <div className="flexCenter search-bar ">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" placeholder="Search by location" />
            <button className="button">Search</button>
          </div>
 


        <div className="flexCenter stats stats-con ">
             <div className="flexColCenter stat">
               <span>
                <CountUp start={8800} end={9000} duration={4}/>
                <span className="stats-plus">+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
             </div>

             <div className="flexColCenter stat">
               <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span className="stats-plus">+</span>
                </span>
                <span className="secondaryText"> Happy Customers</span>
             </div>

             <div className="flexColCenter stat">
               <span>
                <CountUp end={20}/>
                <span className="stats-plus">+</span>
                </span>
                <span className="secondaryText">Award Winnings</span>
             </div>
          </div>
        </div>

        <div className=" flexCenter hero-right">
        <motion.div 
        initial={{x: "7rem", opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition= {{
          duration: 2,
          type: "spring"
        }}

        className="image-container">
          <img src="./hero-image.png" alt="hero image" />
        </motion.div>
      </div>

      </div>
      {/*right side*/}

    </section>
  );
};

export default Hero;
