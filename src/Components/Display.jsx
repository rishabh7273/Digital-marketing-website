import React from 'react'
import { motion } from "framer-motion";
import { Briefcase, Award, ThumbsUp, Smile } from "lucide-react";

export default function Display() {
  return (
    <div  id="display-section">
        <div className="bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left + animation*/}
                <motion.div
                    className="flex-1"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.6, ease: "easeIn" }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-4xl font-bold text-[#92400E] italic mb-5 leading-snug">
                        Get a Significant Boost to Your Business  with <br />
                        <span className="text-[white] bg-[#A18072] p-1.5 italic text-3xl">Opyra Digital Marketing Cum AI Agency</span>
                    </h2>
                    <p className=" text-lg leading-relaxed text-black italic">
                        Opyra is your trusted Digital Marketing and AI-powered growth partner,
                        helping your business scale smarter and faster.
                        We blend data-driven marketing strategies with AI automation to boost visibility, engagement
                        and conversions. From building strong brand awareness to driving intelligent customer acquisition — we combine creativity with technology to make your business truly shine online.
                    </p>
                </motion.div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-6 flex-1">
                    {[
                        { icon: <Briefcase className="w-10 h-10 text-[#92400E] mx-auto mb-3" />, number: "10+", text: "Years of Experience" },
                        { icon: <Award className="w-10 h-10 text-[#92400E] mx-auto mb-3" />, number: "40+", text: "Brands & Enterprises Served" },
                        { icon: <ThumbsUp className="w-10 h-10 text-[#92400E] mx-auto mb-3" />, number: "100+", text: "Projects Completed" },
                        { icon: <Smile className="w-10 h-10 text-[#92400E] mx-auto mb-3" />, number: "80+", text: "Happy Clients" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-all border border-gray-100"
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.3, duration: 1, ease: "easeIn" }}
                            viewport={{ once: false }}
                        >
                            {item.icon}
                            <h3 className="text-3xl font-bold text-[#92400E]">{item.number}</h3>
                            <p className="text-black">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
    </div>
  )
}
