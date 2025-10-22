import React from 'react'
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
     <div  id="about-us"
     className=" text-[#92400E] py-16 px-6 md:px-16">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: false }}
                                className="text-4xl font-extrabold mb-6 italic"
                            >
                                ABOUT US
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                                viewport={{ once: false }}
                                className="text-[#6B3F16] leading-relaxed mb-8"
                            >
    
                                We are a team of seasoned digital innovators with over a decade of experience blending creative marketing strategies and <b className="text-xl"> Artificial intelligence </b>to help brands grow smarter, faster, and stronger in the digital world.
                                Since our inception, we’ve partnered with startups, enterprises, and global brands to craft intelligent marketing ecosystems that deliver measurable results. From data-driven campaigns to automated customer journeys — we harness AI and analytics to make marketing more human, efficient, and impactful.
                                <b className="text-xl"> Our expertise </b> spans across SEO, performance marketing, branding, AI automation, predictive analytics, and creative design — all united under one mission: helping businesses unlock their full digital potential.
                            </motion.p>
    
    
                            <div className="border-l-4 border-[#92400E] pl-4 mb-8">
                                <motion.h2
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                    className="text-xl font-bold italic mb-6"
                                >
                                    Mission
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                    className="text-[#6B3F16] leading-relaxed mb-8"
                                >
                                    Our mission is to redefine the boundaries of digital marketing by integrating human creativity with <b className="text-xl">AI intelligence.</b>
                                    We empower businesses to grow with smarter strategies, sharper insights, and sustainable results — turning every click, campaign, and customer into meaningful success.
                                </motion.p>
                            </div>
    
    
                            <div className="border-l-4 border-[#92400E] pl-4">
                                <motion.h2
                                    initial={{ opacity: 0, y: -50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                    className="text-xl font-bold italic mb-6"
                                >
                                    Vision
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -80 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                                    viewport={{ once: false }}
                                    className="text-[#6B3F16] leading-relaxed mb-8"
                                >
                                    <b className="text-xl">  Our vision is to become a global leader in AI-powered digital transformation </b>, helping brands not just adapt to the future — but shape it.
                                    We aim to build a world where technology amplifies creativity, decisions are data-driven, and marketing is more personal, predictive, and powerful than ever before.
                                </motion.p>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3, delay: 0.3, ease: "easeIn" }}
                            viewport={{ once: false }}
                            className="flex justify-center"
                        >
                            <img
                                src="/Images/office.jpg"
                                alt="Team working in office"
                                className="rounded-lg shadow-xl w-full min-w-lg"
                            />
                        </motion.div>
                    </div>
                </div >
  )
}
