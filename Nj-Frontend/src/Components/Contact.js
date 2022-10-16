import React, { useState } from "react";
import { useEffect } from "react";
import { LightSpeed, Zoom, Fade } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";


export const Contact = ( {getProductId} ) => {
  const [OrderData, setOrderData] = useState({
    name: "",
    email: "",
    contactNo: "",
    productID: "",
  });
  // console.log(OrderData.contactNo)
  const [loading, setloading] = useState("ORDER");
  const [pid , setPid]= useState();
  

//Fetching Product ID 
// console.log("get product id contact" , typeof getProductId)
console.log("get product id contact" , getProductId)


  function PopulateProductID(){
      setPid(getProductId)

      // setOrderData({...OrderData , productID : getProductId} )
  }

  // PopulateProductID()


  useEffect(() => {
    PopulateProductID()
  }, )
  
  // useEffect(() => {
  //   PopulateProductID()
  
  //   return () => {
      
  //   }
  // }, [third])
  



  const notify = () => toast("Confirmation Email Sent");

  function OrderRecieved (){
   const timeout=setTimeout(() => {
    return (
      <>
      <ToastContainer
        position="bottom-left"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        
        />
      </>
    )
   }, 4000);


  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOrderData({
      ...OrderData,
      [name]: value,
    });
  };

  const OrderSubmit = (data) => {
    data.preventDefault();

    setloading(() => {
      return (
        <>
          <button className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            ORDER IS GETTING PLACED ....
          </button>
        </>
      );
    });

    setTimeout(() => {
      fetch("https://namgapi.herokuapp.com/order", {
        // mode: 'no-cors',
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify({
          nameOfCustomer: OrderData.name,
          emailOfCustomer: OrderData.email,
          contactNo: OrderData.contactNo,
          ProductID: OrderData.productID,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json",
        },
      })
        // Converting to JSON
        .then((response) => {
          response.json();
          setloading(() => {
            // notify();
            return (
              <>
                <button onClick={notify} className="flex mx-auto text-white  border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Order Placed
                </button>
              </>
            );
          });
        })

        // Displaying results to console
        .then((json) => console.log(json))
        .catch((err) => {
          console.log("error", err);
        });
    }, 3000);
    // console.log(data.target)
  };

  return (
    <div className="  ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,64L288,32L576,0L864,192L1152,128L1440,128L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
        ></path>
      </svg>
      <Fade>
        <section
          className="text-black body-font relative focus:transition-all "
          id="contact"
        >
          <form onSubmit={OrderSubmit}>
            <div className="container px-5 py-24 mx-auto   text-black  curve">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl lg:text-8xl  text-2xl font-medium title-font mb-4 text-black">
                  Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  {" "}
                  Enter Product Id of your required product{" "}
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto  text-black">
                <div className="flex flex-col flex-wrap -m-2  ">
                  <div className="p-2 ">
                    <div className="relative  ">
                      <label for="name" className="leading-7 text-sm">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        required
                        value={OrderData.name}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:text-yellow-400   focus:ring-2 focus:scale-105 focus:transition-all focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="relative">
                      <label for="email" className="leading-7 text-sm">
                        Email
                      </label>
                      <input
                        onChange={handleChange}
                        type="email"
                        id="email"
                        required
                        name="email"
                        value={OrderData.email}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:text-yellow-400 focus:scale-105 focus:transition-all focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 ">
                    <div className="relative">
                      <label for="contactNo" className="leading-7 text-sm">
                        Contact No
                      </label>
                      <input
                        onChange={handleChange}
                        type="number"
                        name="contactNo"
                        required
                        value={OrderData.contactNo}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:border-indigo-500  focus:bg-black focus:text-yellow-400 focus:ring-2 focus:scale-105 focus:transition-all focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 ">
                    <div className="relative">
                      <label for="email" className="leading-7 text-sm">
                        Product ID
                        {/* {pid} */}
                      </label>
                      <input
                        onChange={handleChange}
                        type="text"
                        name="productID"
                        value={OrderData.productID}
                        required
                        placeholder={`You selected  Product id : ${pid}`}
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500  focus:scale-105 focus:transition-all focus:bg-black focus:text-yellow-400 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>


                  <div className="p-2 w-full text-center ">
                    <button
                      type="submit"
                      onClick={notify}
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      {loading}
                      {/* {loading ===false  ? "Submit Order" : "Order is being placed "  }
                      {/* <div

            className="flex mx-auto bg-green-900 text-white text-center border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
              {loading} 

          </div> */}
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <p className="leading-normal my-5 underline ">
                      Karachi.
                      {/* <br>Saint Cloud, MN 56301 */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <button type='submit'>PLACE ORDER</button> */}
          </form>
     {/* {
      OrderRecieved
     } */}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f3f4f5"
              fill-opacity="0.74"
              d="M0,192L34.3,176C68.6,160,137,128,206,128C274.3,128,343,160,411,181.3C480,203,549,213,617,218.7C685.7,224,754,224,823,234.7C891.4,245,960,267,1029,250.7C1097.1,235,1166,181,1234,154.7C1302.9,128,1371,128,1406,128L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </section>
      </Fade>
    </div>
  );
};
