import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Cards } from "./Cards";
import PenData from "./PenData";

// import  bgPattern from  '../Components/lat_pattern.png'

export const Productz = ({ yellowH, whiteH, paraG , GetProductID }) => {
  const [Pid, setPid] = useState();

 function GetProduct(data){
  console.log("prd",   data);
  

  //SENDING PROPS FUNCTIONS

  GetProductID(data);


}


  return (
    <div>
      <div
        className=" text-white  pattern  grid grid-cols md:grid-cols-2 gap-4 "
        id="Products"
      >
        <Fade right>
          <div className="latest font-poppins mb-4 text-4xl capitalize lg:text-7xl md:text-6xl flex  text-center  justify-center space-x-2 items-center py-4  ">
            <h1 className=" text-yellow-400  "> {yellowH} </h1>
            <h1>{whiteH}</h1>
          </div>
        </Fade>

        <p className=" font-normal  text-[1.4rem] text-center mx-6 ">{paraG}</p>
        <Cards Product_Data={PenData} setProductPid={GetProduct} />

        {/* <Cards/>  */}

        <div className="flex items-center justify-center">
          <button className=" items-center  text-center  justify-center font-bold rounded-lg  ">
            {" "}
          </button>
        </div>
      </div>
    </div>
  );
};
