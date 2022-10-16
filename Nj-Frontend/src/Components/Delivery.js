import React from "react";
import delivery from "../Components/delivery.png";
import { Fade ,Rotate} from 'react-reveal'

export const Delivery = () => {
  return (
    <div>
       <Rotate bottom left>
      <section className=" body-font bg-[#143f7d] ">
        <div
          className="container mx-auto   flex flex-col px-1 py-4 items-center justify-center
             lg:flex"
        >
          <img
            className="lg:w-2/6 md:w-3/6 w-4/6 mb-10  object-center "
            alt="hero"
            src={delivery}
          />
          <div className="text-center      text-white">
            
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-white font-poppins">
            Delivery
            </h1>
            <p classNameName="mx-10 text-xl">
              We are someone you can rely upon 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo asperiores libero placeat ullam magnam impedit sequi eos quae tempore saepe. Aperiam veniam ipsum tempora veritatis quos voluptatum libero necessitatibus natus fugit impedit dolorem ex, maxime animi tempore aspernatur fugiat dolores laboriosam. Inventore doloremque eos necessitatibus.
            </p>
            
            <div className="flex justify-center my-5 ">
            
            
            </div>
          </div>
        </div>
      </section>
      </Rotate>
    </div>
  );
};
