import React from 'react'
import { FaInstagram , FaFacebook, FaLinkedin} from "react-icons/fa";
import { Fade ,Rotate} from 'react-reveal'
export const Footer = () => {
  return (
    <div className='bg-blue-800 text-center      p-10   '>
        

        <div className='flex text-2xl flex-col font-poppins text-white tracking-wide'>
            {/* <h1 className='mb-10'>FOLLOW
             <span className='text-black underline mx-1 '> NAAM JEE  </span>
             ON </h1> */}

           <Fade bottom>   <a className=" text-white text-sm mb-5  lg:text-3xl  mg:text-xl" >  naamjee2@email.com</a></Fade>
           <Fade top>

                <div className= '  flex  text-white text-2xl item-center justify-center space-x-12 item-center text-center group group-hover:text-black  '>                       
                        <FaInstagram/>
                        <FaLinkedin/>
                        <FaFacebook/>
                       
                </div>
           </Fade>

        </div>
    </div>
  )
}
