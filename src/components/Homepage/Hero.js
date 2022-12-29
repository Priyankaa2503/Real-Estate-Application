import React from "react";
const Hero = () => {
    return (
        <div className="w-full">
              <div className="relative">
                    <img src ="/assets/images/architecture.png" className="w-full h-[600px]" alt = "" />
                    <h2 className="text-white absolute font-extrabold text-4xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">Find Your Dream Properties</h2>
                    <div className="bg-white w-[920px] h-[202px] absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                        <p className="font-roboto font-medium text-2xl ml-3 mt-2">Search Your Properties</p>
                        <div className = "bg-blue w-[43px] h-[2px] ml-3"></div>
                        <div className="grid grid-cols-4 gap-4 mt-5">
                            <p className="text-lightgray font-roboto ml-3 mt-2">Looking For</p>
                            <p className="text-lightgray font-roboto ml-3 mt-2">Property Size</p>
                            <p className="text-lightgray font-roboto ml-4 mt-2">Property Location</p>
                        </div>
                        <div className="grid grid-cols-4 gap-10">
                            <button className="  font-roboto dropdown-toggle ml-2 mt-2 px-5 py-2.5 mr-2 border border-bordergray text-xs text-textgray text-start"  type="button"> Property Type</button>
                            <button className="  font-roboto dropdown-toggle mt-2 px-5 py-2.5 mr-2 border border-bordergray text-xs text-textgray text-start"  type="button"> Type Location</button>
                            <button className="  font-roboto dropdown-toggle mr-2 mt-2 px-5 py-2.5  border border-bordergray text-xs text-textgray text-start"  type="button"> Type Location </button>
                            <button className="  font-roboto dropdown-toggle ml-2 mt-2 mr-7 px-6 py-2.5 bg-blue border border-bordergray text-s text-white text-center"  type="button">Search</button>
                        </div>
                    
                    </div>    
            </div>
            <div>
            </div>
        </div>
        );
    };
    
    export default Hero;