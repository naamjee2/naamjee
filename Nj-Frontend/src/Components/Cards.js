import React, { useState } from "react";
import { Fade } from "react-reveal";
import { toast, ToastContainer } from "react-toastify";
import PenData from "./PenData";
export const Cards = ({ Product_Data = [], setProductPid }) => {
  const [GetPid, setPid] = useState();
  async function CopyAndSendProductId(pid) {
    setPid(pid);
    // console.log(pid);
    await navigator.clipboard.writeText(pid);

    //passing it to contact form using props
    setProductPid(pid);
  }

  return (
    <>
      {Product_Data.map((item, index) => {
        const { productID, ProductName, category , img} = item;

        return (
          <>
            <Fade bottom>
              <div className="flex flex-col my-45 bg-zinc-800 text-white my-7 leading-8  mb-5 px-5 mx-6  rounded-lg  ">
              <img className="  rounded w-full object-cover object-center mb-6  " src={img} alt="blog"/>
               
               
                <div
                  className="flex items-center justify-end  my-2 C_Icon"
                  key={parseInt(index) + 1}
                >
                  <p>Product id :{productID}</p>
                  {/* <figure>
          <img src={tailwindLogo} className='h-12 ' alt="img" />
        </figure> */}
                </div>

                <div className="px-4 mb-4 leading-snug">
                                  
                  <h1 className="subH text-blue-400 text-xl">{category} </h1>
                  <h1 className="font-poppins text-xl"> {ProductName} </h1>
                </div>

                <div className="udemy flex items-center px-5 my-5 space-x-6">
                  {/* <figure>
          <img className="h-5"  src={udemyLogo} alt="udemyIcon"   />
        </figure> */}

                  <button
                    onClick={() => CopyAndSendProductId(productID)}
                    className=" text-white bg-blue-500 border-0  p-4 text-center font-poppins outline-none focus:outline-none hover:bg-indigo-600 rounded font-xl"
                  >
                    {GetPid == productID
                      ? "PRODUCT ID COPIED"
                      : "COPY PRODUCT ID"}
                  </button>
                </div>
              </div>
            </Fade>
          </>
        );
      })}
    </>
  );
};
