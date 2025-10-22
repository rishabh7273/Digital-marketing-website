import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // optional icons; can replace with +/-

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How Do You Start Digital Marketing?",
            answer:
                "We start by understanding your brand, goals, and target audience. Then we create a custom digital strategy including SEO, content marketing, social media, and paid ads, and AI tools to help your brand grow effectively.",
        },
        {
            question: "Can Digital Marketing Increase Online Sales?",
            answer:
                "Yes, effective digital marketing campaigns can significantly increase conversions through targeted ads, optimized funnels, and performance tracking.",
        },
        {
            question: "How do I Measure Digital Marketing ROI?",
            answer:
              "We track key metrics like leads, traffic, conversion rates, and revenue growth. Using AI-based analytics, we provide clear performance reports showing how each campaign contributes to your business goals."
        },
        {
            question: "How Much Does Digital Marketing Cost?",
            answer:
                "Our pricing depends on your goals and campaign scope. We offer flexible packages suitable for startups to large enterprises.",
        },
        {
            question: "What Are the Components of Digital Marketing?",
            answer:
                "SEO, social media marketing, content creation, PPC, email marketing, analytics, and and AI-driven automation — all designed to help your brand grow online.",
        },
        {
            question: "Do You Also Provide App Development Services?",
            answer:
                "Yes, our AI agency also specializes in full-stack app and web development tailored for modern businesses.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-4xl font-bold text-[#92400E]">FAQs</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#FFF8F3] via-[#F8EDE3] to-[#D7CCC8] rounded-xl shadow-md overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full flex justify-between items-center cursor-pointer text-left px-6 py-4  text-[#92400E] text-xl font-bold focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <div className="bg-[#92400E] text-white rounded-full w-8 h-8 flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus size={18} strokeWidth={3} />
                                    ) : (
                                        <Plus size={18} strokeWidth={3} />
                                    )}
                                </div>
                            </button>

                            {/* Dropdown Content */}
                            <div
                                className={`px-6 text-black text-xl font-semibold leading-relaxed transition-all duration-300 ${openIndex === index
                                        ? "max-h-40 opacity-100 pb-4"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
