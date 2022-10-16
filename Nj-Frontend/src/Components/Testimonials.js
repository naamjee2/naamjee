import React from 'react'
import { Fade } from 'react-reveal'



export const Testimonials = () => {
  return (
    <div>
{/* <Fade top> */}

<section className=" body-font transition-all" id='steps'>
  <div class="container mx-auto flex px-5 py-7 items-center justify-center flex-col">
    
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  font-poppins"> STEPS TO ORDER </h1>
      {/* <p className="mb-8 leading-relaxed">
              
            </p> */}
           
      <div className="flex justify-center my-5">
        
      </div>
    </div>
  </div>
</section>


<section class="text-black  font-poppins body-font  " >
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    {/* <Fade bottom> */}
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-yellow-500 rounded-full inline-flex items-center justify-center">
         
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font  underline mb-1 text-2xl  ">Check Product ID </h2>
          <p class="leading-relaxed">PRODUCT ID IS GIVEN ON THE UPPER RIGHT CORNER OF THE PRODUCT , COPY IT AND PASTE IT ON THE CONTACT FORM</p>
        </div>
      </div>
    </div>
    {/* </Fade> */}
    {/* <Fade bottom> */}

    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0  flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100  rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font mb-1  underline text-2xl"> SUBMIT </h2>
          <p class="leading-relaxed">On submitting you'll recieve a confirmation mail , also a follow up call soon.</p>
        </div>
      </div>
    </div>
    {/* </Fade> */}

    {/* <Fade bottom> */}

    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"> 	&#10004; </div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        &#10004;
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0 ">
          <h2 class="font-medium title-font text-gray-900 mb-1 underline text-2xl"> Congrats </h2>
          <p class="leading-relaxed   ">On submitting you'll recieve a confirmation mail , also a follow up call soon.</p>
        </div>
      </div>
    </div>
    {/* </Fade> */}
  
    
  </div>
</section>




{/* </Fade> */}
    </div>
  )
}
