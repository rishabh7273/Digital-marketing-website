import React from 'react'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  return (
    <section  id='Testimonials' className="bg-[#FFF8F3] py-7">
                   <div className="max-w-7xl mx-auto px-6">
                       {/* Section Title */}
                       <h2 className="text-4xl font-bold text-center text-[#92400E] mb-10">
                           What Our Clients Say
                       </h2>
   
   
                       <div className="relative w-full overflow-hidden">
   
                           <div className="flex gap-8 animate-scroll">
   
                               {[...Array(2)].map((_, i) => (
                                   <React.Fragment key={i}>
                                       <TestimonialCard
                                           image="Images/bana-logo.png"
                                           title="BanaAssi"
                                           description="Opyra Digital Marketing helped our brand scale online with AI-powered ad campaigns. Our leads increased by 3x in just two months!"
                                       />
                                       <TestimonialCard
                                           image="Images/user2.jpg"
                                           title="Jane Cooper"
                                           description="The team at Opyra combines creativity with intelligent automation. Our website traffic has grown massively and our social engagement is through the roof."
                                       />
                                       <TestimonialCard
                                           image="Images/user3.jpg"
                                           title="Albert Flores"
                                           description="Their AI-driven marketing strategies helped us reduce ad costs while improving conversions. Truly a next-gen digital agency in India!"
                                       />
                                   </React.Fragment>
                               ))}
                           </div>
                       </div>
                   </div>
               </section >
  )
}
