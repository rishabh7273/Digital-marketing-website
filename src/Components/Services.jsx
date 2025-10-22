import React from 'react'
import { useState } from 'react';
import Card from "./Card";
import { motion } from "framer-motion";



export default function Services() {

   

    const [showAll, setShowAll] = useState(false);
    const [direction, setDirection] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            image: "Images/seo.jpeg",
            title: "Search Engine Optimization (SEO)",
            description:
                "Improve your website’s visibility on Google and attract organic traffic.",
            link: "#",
        },
        {
            image: "Images/ai.jpeg",
            title: "AI Automation",
            description:
                "Streamline your business operations with intelligent AI automation.",
            link: "#",
        },
        {
            image: "Images/ppc.jpeg",
            title: "Pay Per Click (PPC) Advertising",
            description: "Get instant leads with targeted paid campaigns.",
            link: "#",
        },
        {
            image: "Images/smm.jpeg",
            title: "Social Media Marketing (SMM)",
            description:
                "Build your brand presence across platforms like Instagram, Facebook, and LinkedIn.",
            link: "#",
        },
        {
            image: "Images/content.jpeg",
            title: "Content Marketing",
            description: "Create engaging content to educate your audience.",
            link: "#",
        },
        {
            image: "Images/email.jpeg",
            title: "Email Marketing",
            description:
                "Nurture leads and retain customers through personalized email campaigns.",
            link: "#",
        },
        {
            image: "Images/inf.jpeg",
            title: "Influencer Marketing",
            description: "Collaborate with influencers to increase your reach.",
            link: "#",
        },
        {
            image: "Images/sem.jpeg",
            title: "Search Engine Marketing (SEM)",
            description:
                "Boost your brand’s online visibility through paid and organic search strategies.",
            link: "#",
        },
        {
            image: "Images/cro.jpeg",
            title: "Conversion Rate Optimization (CRO)",
            description:
                "Analyze and improve your website’s design and UX to convert more visitors.",
            link: "#",
        },
        {
            image: "Images/orm.jpeg",
            title: "Online Reputation Management (ORM)",
            description:
                "Monitor and manage your brand’s online image by responding to reviews.",
            link: "#",
        },
        {
            image: "Images/alt.jpg",
            title: "Analytics & Performance Tracking",
            description:
                "Track performance with analytics to refine marketing strategies.",
            link: "#",
        },
    ];

    const cardsPerPage = 3;

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) =>
            prev + cardsPerPage >= services.length ? 0 : prev + cardsPerPage
        );
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) =>
            prev - cardsPerPage < 0
                ? Math.max(services.length - cardsPerPage, 0)
                : prev - cardsPerPage
        );
    };

    const servicesToDisplay = showAll
        ? services
        : services.slice(currentIndex, currentIndex + cardsPerPage);


    return (
        <div>
            <div
                id='Services'
                className="relative bg-gradient-to-b from-[#FFF8F3] via-[#F8EDE3] to-[#D7CCC8] pb-5 gap-7 pt-20 rounded-4xl">
                <motion.div
                    className="font-bold flex items-center justify-center mb-10"
                    initial={{ y: -50, opacity: 0 }}      // start above and invisible
                    whileInView={{ y: 0, opacity: 1 }}    // slide down to original position
                    viewport={{ once: false, amount: 0.3 }} // trigger when 30% visible
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-bold bg-[#8D6E63] p-2  text-white p-2] italic rotate-[-2deg] rounded-2xl ">
                        <span className="absolute -top-1 left-1 right-1 h-1 bg-white rounded-full"></span>
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-b-2xl"></span>
                        <span className="absolute top-0 bottom-0 left-0 w-1 bg-white rounded-l-2xl"></span>
                        <span className="absolute top-0 bottom-0 right-0 w-1 bg-white rounded-r-2xl"></span>
                        Our Services</h1>
                </motion.div>
                {/* left arrow */}
                {!showAll && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#92400E] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
                        >
                            &#8592;
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#92400E] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
                        >
                            &#8594;
                        </button>
                    </>
                )}


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-25">

                    {servicesToDisplay.map((service, index) => (
                        <motion.div
                            key={index}
                            // ----------------- Float Animation for Each Card -----------------
                            animate={{ y: [0, -10, 0] }}
                            transition={{

                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1,
                            }}
                        >
                            <Card
                                key={index}
                                image={service.image}
                                title={service.title}
                                description={service.description}
                                link={service.link}
                            /></motion.div>
                    ))}

                </div>

                {/* View All Services Button */}

                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-[#92400E] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#cf8e5c] transition"
                    >
                        {showAll ? "View Less →" : "View All Services →"}
                    </button>
                </div>
            </div>
        </div>
    )
}
