import React from "react";
const Navbar = () => {
    return (
        <div>
        <div className="w-full h-[62px] bg-blue mx-auto ">
            <div className=" hidden md:flex flex-wrap items-center">
            <div className="w-[20px] h-[30px] pt-5 ml-40"><img src ="/assets/images/email.svg"  alt = "" /> </div>
            <div className="text-white font-roboto ml-4 mt-4 pt-1"><p>mail.uremail.com</p></div>
            <div className="w-[20px] h-[30px] pt-5 ml-10"><img src ="/assets/images/phone.svg"  alt = "" /> </div>
            <div className="text-white  font-roboto ml-4 mt-4 pt-1 mr-80"><p>mail.uremail.com</p></div> 
            <div className=" hidden md:flex flex-wrap justify-content-end">
             <div className="w-[20px] h-[30px] pt-6 ml-40"><img src ="/assets/images/login.png"  alt = "" /> </div>
            <div className="text-white font-roboto ml-4 mt-4 pt-1"><p>Login/Signup</p></div>        
            </div>        
            </div>       
        </div>
        <div className="w-full h-[90px] bg-white mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="pt-1 ml-20 mb-2">
               <img src ="/assets/images/Logo.png"  alt = "" />
              </div>
               <div className="hidden md:flex space-x-6 pt-2">
                <a href ='#' className="hover:text-blue font-roboto ">Home</a>
                <a href ='#' className="hover:text-blue font-roboto ">Property</a>
                <a href ='#' className="hover:text-blue font-roboto ">Blog</a>
                <a href ='#' className="hover:text-blue font-roboto ">Agents</a>
                <a href ='#' className="hover:text-blue font-roboto ">FAQs</a>
                <a href ='#className="hover:text-blue"'>Contact Us</a>
                <img src ="/assets/images/menu.png"  alt = "" /> 
                </div>
            </div>

        </div>

        </div>
        

        
    )
};
export default Navbar
