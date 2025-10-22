
import { Mail, Phone } from "lucide-react";
import { useState } from "react";


export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [MyQuery, setMyQuery] = useState("");
    const phoneNumber = "919335501806";

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello! My name is ${name}. My email is ${email}. Message: ${message}`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <>

            <section className="min-h-[80vh]  bg-[#f8f5f0] flex items-center justify-center py-8 px-6">
                <div id="contact-form" className="max-w-4xl w-full bg-[#8D6E63] rounded-3xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div className="flex flex-col justify-between">
                        <h2 className="text-3xl font-bold text-white italic mb-6">Contact Us</h2>
                        <p className="text-white mb-8">
                            Get in touch with Opyra Digital Marketing. You can reach us via WhatsApp, phone call, or email. We're here to help you grow your business!
                        </p>

                        <div className="space-y-6">
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919335501806?text=Hello%20Opyra%20Digital%20Marketing!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-[#25D366] hover:bg-green-600 text-white rounded-xl shadow-md transition"
                            >
                                <span>Contact via WhatsApp:</span>
                                <img
                                    src="/Images/whatsapp.jpg"
                                    alt="WhatsApp"
                                    className="w-10 h-10 object-cover rounded-full flex-shrink-0"
                                />
                            </a>

                            {/* Call */}
                            <a
                                href="tel:+919335501806"
                                className="flex items-center gap-2 bg-[#FFB400] hover:bg-yellow-500 text-white rounded-xl p-3 shadow-md transition w-full md:w-auto justify-center"
                            >
                                <Phone size={20} />
                                <span className="font-semibold">Call Us: +91 9335501806</span>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:contact@opyraagency.com"
                                className="flex items-center gap-2 bg-[#4A90E2] hover:bg-blue-600 text-white rounded-xl p-3 shadow-md transition w-full md:w-auto justify-center"
                            >
                                <Mail size={24} />
                                <span className="font-semibold">Email: contact@opyraagency.com</span>
                            </a>
                        </div>
                    </div>

                    {/* --- Contact Form --- */}
                    <div> {/* <-- Scroll target here */}
                        <h3 className="text-2xl font-semibold text-white italic mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border bg-white border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#5A9690]"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border bg-white border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#5A9690]"
                            />
                            <textarea
                                placeholder="Your Message"
                                value={MyQuery}
                                onChange={(e) => setMyQuery(e.target.value)}
                                className="border bg-white border-gray-300 rounded-xl p-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#5A9690]"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#5A9690] text-white font-semibold py-3 rounded-xl shadow-md hover:bg-[#4a857f] transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* --- Office + Map --- */}
            <div className="min-h-screen flex flex-col md:flex-row pt-8 md:pt-0">
                {/* Left Side: Contact Info */}
                <div className="bg-white flex-1 flex p-8">
                    <div className="p-8 w-full max-w-md">
                        <h2 className="text-2xl font-bold text-[#92400E] mb-6">OFFICE Location</h2>
                        <div className="space-y-5 text-[#92400E]">
                            <div className="flex items-start font-bold text-2xl space-x-3">
                                <span className="text-xl">📍</span>
                                <p>Aic Building Bhu, Varanasi</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-xl">✉️</span>
                                <a href="#" className="font-semibold hover:underline">opyra@gmail.com</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-xl">📞</span>
                                <a href="tel:+919335501806" className="hover:underline">+91-9335501806</a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-xl">☎️</span>
                                <a href="tel:01204580130" className="hover:underline">0120-4580130</a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Side: Google Map */}
                <div className="flex-1">
                    <iframe
                        title="EZ Rankings Location"
                        src="https://www.google.com/maps?q=25.2899958,82.9940409&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
