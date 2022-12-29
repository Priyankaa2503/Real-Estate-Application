import React from "react";
const Property = () =>{
    return(
        <div className= " bg-pink px-32 py-32">
                <p className="font-roboto text-4xl font-semibold text-gray text-center">Our Feature Property</p>
                <p className="mt-4 font-roboto text-1xl font-thin text-gray text-center">There are many variations of passages of Lorem Ipsum available but the this <br/> in majority have suffered alteration in some</p>
                <div className="grid grid-cols-2 p-10 gap-10">
                    <div className="bg-white pl-0 w-[450px]">                  
                    <div className="bg-blue w-[114px] h-[48px] mt-5 inline-block absolute ml-5">
                        <p className="text-white font-semibold font-roboto text-1xl text-center p-3">$32000</p>
                    </div>
                    <img src ="/assets/images/housegrid.png" className=" object-cover h-[250px]"></img>              
                    <p className="font-roboto text-2xl mt-2 ml-5 font-semibold text-gray text-left">Bravo Apollo Apartments</p>
                    <p className="mt-3 mb-2 font-roboto text-1xl font-thin text-gray ml-5">There are many variations of passages of lorem Ipsum available, but <br/> the majority have suffered alteration in some form injected.</p>       
                    </div>

                    <div className="bg-white pl-0 w-[450px]">
                    <div className="bg-blue w-[114px] h-[48px] mt-5 inline-block absolute ml-5">
                        <p className="text-white font-semibold text-1xl font-roboto  text-center p-3">$32000</p>
                    </div>
                    <img src ="/assets/images/house-2.png" className=" object-cover h-[250px]"></img>
                    <p className="font-roboto text-2xl mt-2 ml-5 font-semibold text-gray text-left">Bravo Apollo Apartments</p>
                    <p className="mt-3 mb-2 font-roboto text-1xl font-thin text-gray ml-5">There are many variations of passages of lorem Ipsum available, but <br/> the majority have suffered alteration in some form injected.</p>       
                    </div>

                    <div className="bg-white pl-0 w-[450px]">
                    <div className="bg-blue w-[114px] h-[48px] mt-5 inline-block absolute ml-5">
                        <p className="text-white font-semibold font-roboto text-1xl text-center p-3">$32000</p>
                    </div>
                    <img src ="/assets/images/house-3.png" className=" object-cover h-[250px]"></img>
                    <p className="font-roboto text-2xl mt-2 ml-5 font-semibold text-gray text-left">Bravo Apollo Apartments</p>
                    <p className="mt-3 mb-2 font-roboto text-1xl font-thin text-gray ml-5">There are many variations of passages of lorem Ipsum available, but <br/> the majority have suffered alteration in some form injected.</p>       
                    </div>

                    <div className="bg-white pl-0 w-[450px]">
                    <div className="bg-blue w-[114px] h-[48px] mt-5 inline-block absolute ml-5">
                        <p className="text-white font-semibold font-roboto text-1xl text-center p-3">$32000</p>
                    </div>
                    <img src ="/assets/images/house-4.png" className=" object-cover h-[250px]"></img>
                    <p className="font-roboto text-2xl mt-2 ml-5 font-semibold text-gray text-left">Bravo Apollo Apartments</p>
                    <p className="mt-3 mb-2 font-roboto text-1xl font-thin text-gray ml-5">There are many variations of passages of lorem Ipsum available, but <br/> the majority have suffered alteration in some form injected.</p>       
                    </div>               
                </div>

                <div className="flex justify-center">
                <button className=" font-roboto px-6 py-2.5 bg-blue border border-bordergray text-s text-white text-center items-center"  type="button">See More Property</button>
                </div>
            </div>
        
        );
    };
    
    export default Property;