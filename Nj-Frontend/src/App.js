import { Cards } from "./Components/Cards";
import { Productz } from "./Components/Productz";
import { Hero } from "./Components/Hero";
import { Notify } from "./Components/Notify";
import { Delivery } from "./Components/Delivery";
import { useEffect, useState } from "react";
import { Slide } from "react-reveal";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Testimonials } from "./Components/Testimonials";
import PenData from "./Components/PenData";

function App() {
  const [spinner, setSpinner] = useState(() => {
    // return "woho"
  });

  const [populateContact, setPopulateContact] = useState('Product ID WILL BE COPIED HERE')

  function FetchPIDAndpopulateContact(prodID) {
    console.log("PID FROM PARENT  ", prodID)

    setPopulateContact(prodID)
  }


  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);

  return (
    <div clasName="App bg-black">
      {spinner}
      <Hero />
      <Productz yellowH={"PRODUCTS"} GetProductID={FetchPIDAndpopulateContact} />
      <Notify />
      {/* <Productz yellowH={"In demand Products"} getProductId={FetchPIDAndpopulateContact} /> */}
      {/* <Cards Product_Data={PenData} /> */}
      <Delivery />

      <Testimonials />
      <Slide>
        <Contact getProductId={populateContact} />
      </Slide>
      <Footer />
    </div>
  );
}

export default App;
