import React from "react";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Property from "./Property";
import Recommend from "./Recommend";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <div>   
           <Hero/>
           <AboutUs/>
           <Property/>
           <Subscribe/>
           <Recommend/>
            
        </div>
    );
};

export default Home;