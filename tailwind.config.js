/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:
      {
        sm: "480px",
        md: "768px",
        lg: "976px"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        
      },
      colors:{
        blue :"#0984E3",
        white:"#FFFFFF",
        gray :"#2A2C30",
        lightgray : "#333333",
        bordergray: "#D3DEE8",
        textgray: " #7B7B7B",
      },
      // backgroundImage: {
      //   'home': "url('/images/architecture.png')",
      // },

    },
   
  },
  
  plugins: [],
}
