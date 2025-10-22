import React from 'react'

export default function Clint() {
  return (
     <div className="bg-gradient-to-b from-[#FFF8F3] via-[#F8EDE3] to-[#D7CCC8] text-[#92400E] py-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10 italic "> Our Trusted Clients</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        <img
                            src="/Images/bana-logo.png"
                            alt="Jean's Restaurant Supply"
                            className="h-12 object-contain"
                        />
                        <img
                            src="/images/hero-logo.png"
                            alt="Hero"
                            className="h-12 object-contain"
                        />
                        <img
                            src="/images/yas-logo.png"
                            alt="Yas"
                            className="h-12 object-contain"
                        />
                        <img
                            src="/images/tiplur-logo.png"
                            alt="Tiplur"
                            className="h-12 object-contain"
                        />
                    </div>
                </div>
            </div>
  )
}
