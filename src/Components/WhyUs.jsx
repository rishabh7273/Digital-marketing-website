import React from 'react'
import { motion } from "framer-motion";
import Card from "./Card";
import { useNavigate } from 'react-router-dom';

export default function WhyUs() {

       const navigate = useNavigate();
  
      const handleClick = () => {
          navigate('/contact');
      };

  return (
    <div id='Why-us' className="w-full bg-gray-50 py-20 relative">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
                    src="Images/bg2vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <motion.div
                    className="relative z-10 font-bold flex items-center justify-center mb-10"
                    initial={{ y: -100, opacity: 0 }}      // start above and invisible
                    whileInView={{ y: 0, opacity: 1 }}    // slide down to original position
                    viewport={{ once: false, amount: 0.3 }} // trigger when 30% visible
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-bold bg-[#92400E] p-2  text-white p-2] italic rotate-[-2deg] rounded-2xl ">
                        <span className="absolute -top-1 left-1 right-1 h-1 bg-white rounded-full"></span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-b-2xl"></span>
                        <span className="absolute top-0 bottom-0 left-0 w-1 bg-white rounded-l-2xl"></span>
                        <span className="absolute top-0 bottom-0 right-0 w-1 bg-white rounded-r-2xl"></span>
                        Why Choose Us</h1>
                </motion.div>
                <div className="max-w-7xl mx-auto px-6 text-center relative">
                    {/* Heading */}
                    <motion.div
                        className="relative z-10 mb-10"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl font-bold text-[#92400E] italic mb-4">
                            Empowering Your Growth with Data-Driven Strategies & AI Innovation
                        </h2>
                        <p className="italic text-2xl  text-[#92400E] mb-12">
                            “Innovative Marketing Strategies Powered by Data and AI to Grow Your Business”
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.3, // delay between each card
                                },
                            },
                        }}
                    >

                        <motion.div
                            variants={{
                                hidden: { x: -50, opacity: 0 },
                                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
                            }}
                        >
                            <Card
                                image="/Images/ai-powered.jpeg"
                                title="AI-Powered Marketing"
                                description="Optimize campaigns, predict customer behavior, and drive higher ROI with advanced AI solutions."
                                ShowButton={false}
                            /></motion.div>

                        <motion.div
                            variants={{
                                hidden: { x: -50, opacity: 0 },
                                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
                            }}
                        ><Card
                                image="/Images/data-driven.jpg"
                                title="Data-Driven Strategies"
                                ShowButton={false}
                                description="Every decision is backed by analytics and real-time insights to ensure measurable business growth."
                            /></motion.div>

                        <motion.div
                            variants={{
                                hidden: { x: -50, opacity: 0 },
                                visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
                            }}
                        > <Card
                                image="Images/creative.jpg"
                                title="Creative & Innovative Solutions"
                                ShowButton={false}
                                description="Stunning designs, compelling content, and unique campaigns that stand out in a crowded market."
                            /></motion.div>
                    </motion.div>

                    {/* CTA Button */}
                    <div className="mt-12">
                        <button onClick={handleClick} className="bg-[#92400E] italic text-white px-8 py-3 rounded-full font-semibold cursor-pointer  hover:bg-[#E2A16F] transition-colors duration-300">
                            Let’s Grow Your Business Together
                        </button>
                    </div>
                </div>
            </div>
  )
}
