import React, { useState } from "react";
import { Fade } from "react-reveal";

export const Notify = () => {
  const [subscriber, setSubscriber] = useState();

  
  const PushSub = (e) => {
      e.prevent();

      
    };

  return (
    <Fade duration={2000} bottom>
      <div className="  bg-black w-5/5  p-20   transition-all" id="notify">
        <div className="flex flex-col font-poppins items-end mx-5">
          <h1 className="text-white text-2xl mb-6">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <h4 className="text-white  text-lg mb-3 ">
            {" "}
            & get nofified on new products
          </h4>

          <div className="flex ">
            <input
              type="text"
              onChange={(inp) => {
                setSubscriber(inp.target.value);

              }}
              id="name"
              name="name"
              className=" text-black  font-sans  border border-gray-700 focus:border-indigo-500 w-12/12  focus:ring-2 focus:ring-indigo-900 py-1 text-center px-3 outline-none focus:border-spacing-6 transition-colors duration-200 ease-in-out"
              placeholder="Email"
            />

            <button
              onClick={() => {}}
              className=" text-black bg-yellow-300 border-0   sm:w-2/5  p-4  font-sans font-semibold outline-none   focus:outline-none  font-xl"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};
