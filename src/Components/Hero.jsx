import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

export default function Hero() {

     const handleClick = () => {
    scroller.scrollTo("display-section", {
      duration: 800,        
      delay: 0,
      smooth: "easeInOutQuart", 
      offset: -80              
    });
  };

    return (
        <>

            <section  id="home" 
                className="relative w-full min-h-[100vh] text-white flex items-center justify-center bg-cover bg-center bg-no-repeat" >
                {/* 🔹 Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    src="Images/bgvid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/60"></div>


                {/* Hero Content */}
                <div className="max-w-6xl mx-auto px-6 text-center z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#432323]"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        Empower Your Brand with <br />
                        <span className="text-[#5A9690]">Next-Gen Digital Marketing</span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        We craft strategies that elevate your online presence, engage your audience, and drive real results.
                    </motion.p>

                    <motion.div
                        className="mt-10 flex justify-center gap-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        <motion.button
                        onClick={handleClick}
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#E2A16F] text-black font-semibold px-6 py-3 mt-3.5 rounded-lg shadow-md hover:bg-[#cf8e5c] transition italic"
                        >
                            Get Started
                        </motion.button>

                    </motion.div>
                </div>
            </section>

        </>

    );
}


