import React, { useState } from "react";
import "./Home.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  IoMdTrendingUp,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoCarSportSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function HomeSection() {
  const cars = [
    {
      id: 1,
      name: "REVUELTO",
      color: "#F04D12",
      text: "Revuelto is Lamborghini's flagship plug-in hybrid supercar, introduced in 2023 as the successor to the Aventador. It features a 6.5L V12 engine paired with three electric motors, delivering a combined 1,001 hp (1,015 PS). With an all-wheel drive system, dual-clutch 8-speed transmission, and a lightweight carbon-fiber chassis.",
      time: "2.5",
      topSpeed: "350",
      rpm: "9500",
      image: "./images/revuelto.png",
    },
    {
      id: 2,
      name: "GALLARDO LP560",
      color: "#efd50c",
      text: " Lamborghini Gallardo [2005-2014] LP 560 is the top model in the Gallardo [2005-2014] lineup and the price of Gallardo [2005-2014] top model is Rs. 2.80 Crore. Lamborghini Gallardo [2005-2014] LP 560 is available in Automatic transmission and offered in 3 colours: Nero Nemesis, Bianco Canopus and Arancio Argos.",
      time: "3.7",
      topSpeed: "324",
      rpm: "8000",
      image: "./images/lamborghini.png",
    },
    {
      id: 3,
      name: "URUS",
      color: "#F74A06",
      text: "The Lamborghini Urus is a high-performance luxury SUV with a 4.0L twin-turbo V8, producing 657 hp and reaching 0-100 km/h in 3.3 seconds. It combines supercar performance with SUV practicality, featuring all-wheel drive, adaptive air suspension, and a bold Lamborghini design.",
      time: "3.3",
      topSpeed: "305",
      rpm: "6800",
      image: "./images/urus.png",
    },
    {
      id: 4,
      name: "TEMERARIO",
      color: "#2F3B4B",
      text: "The Lamborghini Temerario is an upcoming V10 hybrid supercar, expected to succeed the Huracán. It will feature a new plug-in hybrid powertrain, combining electrification with Lamborghini’s signature performance and design.",
      time: "2.8",
      topSpeed: "330",
      rpm: "10000",
      image: "./images/temerario.png",
    },
    {
      id: 5,
      name: "HURRICAN",
      color: "#585335",
      text: "The Lamborghini Huracán is a V10-powered supercar, introduced in 2014 as the successor to the Gallardo. With a 5.2L naturally aspirated V10, all-wheel or rear-wheel drive options, and sharp aerodynamics, it delivers thrilling performance and precision handling.",
      time: "2.9",
      topSpeed: "325",
      rpm: "8500",
      image: "./images/hurrican.png",
    },
  ];

  const [data, setData] = useState(0);

  const handlePrev = () => {
    setData((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleNext = () => {
    setData((prev) => (prev + 1) % cars.length);
  };

  return (
    <main className="main_container">
      <div className="main_layout">
        <motion.p
          className="main_title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          MODELS
        </motion.p>

        <motion.div
          key={data}
          initial={{ opacity: 0, x: +300 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="home_img"
        >
          <img src={cars[data].image} alt="" />
        </motion.div>

        <button className="left_arrow" onClick={handlePrev}>
          <IoIosArrowDropleftCircle size={30} />
        </button>
        <button className="right_arrow" onClick={handleNext}>
          <IoIosArrowDroprightCircle size={30} />
        </button>
      </div>

      <div className="main_information">
        <div className="main_data">
          <h2 className="home_subtitle" style={{ color: cars[data].color }}>
            {cars[data].name}
          </h2>
          <p className="main_description">{cars[data].text}</p>
        </div>

        <div className="box">
          <div className="box_content">
            <div className="Hero_speedometer">
              <DotLottieReact
                src="https://lottie.host/5a10c618-cf5e-4706-8725-d6acec32575d/a3gZOntGtN.lottie"
                loop
                autoplay
              />
            </div>
            <h3 className="box_medium-title ">{cars[data].time}</h3>
            <span className="box_medium-description">Sec.</span>
            <span className="box_medium-detail">0-100 km/h</span>
          </div>

          <div className="sub_box">
            <div className="sub_box_content ">
              <span className="sub_box_icon">
                <IoMdTrendingUp />
              </span>
              <h3 className="sub_box-title ">{cars[data].topSpeed}</h3>
              <span className="sub_box-description ">km/h </span>
              <span className="sub_box-description">Top Speed</span>
            </div>
            <div className="sub_box_content">
              <span className="sub_box_icon">
                <IoCarSportSharp />
              </span>
              <h3 className="sub_box-title ">{cars[data].rpm}</h3>
              <span className="sub_box-description ">r.p.m </span>
              <span className="sub_box-description">power</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main_bg">
        <img src="./images/bg.webp" alt="bg" />

        <div className="main_bg_text">
          <motion.h4
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            DEALER LOCATOR
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            FIND YOUR <br />
            COUNTRY DEALER
          </motion.h2>
        </div>

        <div className="main_bg_css_overlay"></div>
      </div>

      <div className="main_blog_heading">
        <p>NEWS</p>
        <h1>LAMBORGHINI WORLD</h1>
        <h4>The Automobili Lamborghini Museum is going beyond… and now in taste as well.</h4>
      </div>

      <div className="main_card">
        <div className="main_card_image">
        <img src="./images/runninglambo.webp" alt="car_img"/>
        </div>
        <div className="main_card_image_data">
          <p>30 January 2025</p>
          <button>Revuelto</button>
          <h1>A 2024 FULL OF AWARDS FOR LAMBORGHINI'S NEW HYBRID RANGE</h1>
          <button id="main_read-more">READ MORE</button>
        </div>
      </div>
      <br/>
      <br/>
      <div className="main_card">
        <div className="main_card_image">
        <img src="./images/lambo.webp" alt="car_img"/>
        </div>
        
        <div className="main_card_image_data">
          <p>29 January 2025</p>
          <button>TEMERARIO</button>
          <h1>LAMBORGHINI TEMERARIO: VOYAGE INTO THE WILD (FRAME)</h1>
          <button id="main_read-more">READ MORE</button>
        </div>
      </div>

      <div className="main_button_seeAll">
      <button>SEE ALL</button>
      </div>
      
    </main>
  );
}

export default HomeSection;
