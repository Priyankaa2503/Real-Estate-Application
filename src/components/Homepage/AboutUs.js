import React from "react";
const AboutUs = () =>{
    return(
        <div className="px-32 py-32 relative">
        <div className="flex flex-row space-x-12">                 
               <div className="basis-1/3 ml-20 px-2 py-0 bg-blue h-[390px]">
               <img src ="/assets/images/family-moving-using-boxes 1.png" className="h-[390px] p-2 " alt = "" /> 
               {/* <div className=" ml-20 px-2 py-0 bg-blue absolute -translate-y-1/3 top-2/3 left-1/3 right-2/3 w-[150px] h-[150px]"> </div> */}
               </div>
               <div className="basis-1/2">
                        <span className="font-roboto text-3xl font-bold text-darkgray">Are You Looking Best Property </span>
                        <br/>
                        <span className="font-roboto text-3xl font-bold text-darkgray"> Near You? Contact Us 
                        </span>
                        <br/>
                        <br/>
                        <p className="font-roboto font-semibold text-blue text-small">Who We Are</p>
                        <br/>
                        <p className="font-roboto text-lightgray text-small">It is a long established fact that a reader will be distracted by <br/> the readable content of a page when looking at its layout. The point of <br/> using Lorem Ipsum is that it has normal distribution.
                        <br/>
                        <br/>
                        It is a long established fact that a reader will be distracted by the <br/> readable content of a page when looking at its layout.</p>
                            <br/>
                        <div className="flex flex-rows gap-20">
                        <div className="flex flex-rows gap-2">
                        <img src ="/assets/images/house 1.png" className=" p-2  bg-boxcolor" alt = "" /> 
                        <div>
                            <p className="mt-1 text-gray font-semibold">322+</p>
                            <p className="mt-1 text-gray font-light">Properties Listed</p>
                        </div>
                        </div>
                        <div className="flex flex-rows gap-2">
                        <img src ="/assets/images/home 1.png" className=" p-2  bg-boxcolor" alt = "" /> 
                        <div>
                            <p className="mt-1 text-gray font-semibold">158+</p>
                            <p className="mt-1 text-gray font-light">Properties Sold</p>
                        </div>
                        </div>
                        </div>
               </div>                   
        </div>
        <div className="bg-linegray width-[1000px] h-[1px] mt-10"></div>
        <div className="grid grid-cols-3 mt-10 ">
        <div className="flex flex-rows gap-2">
                        <img src ="/assets/images/property 1.png" className=" w-[50px] h-[50px] bg-boxcolor " alt = "" /> 
                        <div>
                            <p className="mt-1 text-gray font-semibold">Buy & Sell Properties</p>
                            <p className="mt-1 text-gray font-light">There are many variations of passages of Lorem Ipsum available but the majority suffered.</p>
                        </div>
        </div>
        <div className="flex flex-rows gap-2">
                        <img src ="/assets/images/maps-and-flags 1.png" className=" w-[50px] h-[50px] bg-boxcolor " alt = "" /> 
                        <div>
                            <p className="mt-1 text-gray font-semibold">Perfect Location</p>
                            <p className="mt-1 text-gray font-light">There are many variations of passages of Lorem Ipsum available but the majority suffered.</p>
                        </div>
        </div>
        <div className="flex flex-rows gap-2">
                        <img src ="/assets/images/customer (1) 1.png" className=" w-[50px] h-[50px] bg-boxcolor " alt = "" /> 
                        <div>
                            <p className="mt-1 text-gray font-semibold">Faster Services</p>
                            <p className="mt-1 text-gray font-light">There are many variations of passages of Lorem Ipsum available but the majority suffered.</p>
                        </div>
        </div>

        </div>
        
    </div>

    );
}
export default AboutUs;