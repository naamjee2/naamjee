import React from "react";
import herobg from "./bghero.png";
import { Notify } from "./Notify";
import { LightSpeed, Zoom, Fade } from "react-reveal";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <Fade duration={1000} >

    <section className="text-white body-font flex flex-col bg-black ">

      <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,106.7C960,139,1200,181,1320,202.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>
      <div className="container mx-auto flex   lg:flex-col sm:flex-col  justify-center items-center ">
        <div className="w-full  flex flex-col mb-16 items-center text-center my-5">
          <Fade left duration={3000 }>
            <h1 className="title-font    mb-4  text-white font-poppins leading-[.7] px-8 text-8xl  text-center md:text-9xl lg:text-9xl lg:px-7">
              {" "}
              NAAM JEE{" "}
            </h1>
          </Fade>

          <Fade bottom  duration={5000 } > 
            <p className="mb-8 leading-[1.6] px-20 mx-2  md:text-xl  lg:text-2xl  font-[400] font-[]  ">
              YOU NAME IT
            </p>
          </Fade>
          {/* <div className="flex w-full justify-center items-end"> */}
            <Link smooth spy to="contact" >
          <button className=" text-white bg-blue-500 border-0  p-4 text-center font-poppins outline-none focus:outline-none hover:bg-indigo-600 rounded font-xl">
            ORDER TODAY

          </button>
            </Link>
          {/* </div>       */}
        </div>
      </div>
      {/* <Fade top > */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f1c30e"
          fill-opacity="0.74"
          d="M0,192L34.3,176C68.6,160,137,128,206,128C274.3,128,343,160,411,181.3C480,203,549,213,617,218.7C685.7,224,754,224,823,234.7C891.4,245,960,267,1029,250.7C1097.1,235,1166,181,1234,154.7C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
      </svg>
      {/* </Fade> */}
    </section>
          </Fade>
  );
};
