import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Card({image , title , description , ShowButton=true }) {

   const navigate = useNavigate();
  
      const handleContact = () => {
          navigate('/contact');
      };

  return (
    <div className="max-w-sm bg-[#F9F5F3] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-60 lg:h-64 object-cover rounded-t-lg"
      />

      <div className="p-6 flex flex-col justify-between h-[250px]">
        <h2 className="text-xl font-bold text-[#92400E] mb-2">{title}</h2>
        <p className="text-[#2F5755] font-black text-xl italic  mb-4">{description}</p>
        
                {ShowButton && (
        <div className='flex justify-center'>
        <button onClick={handleContact} className="bg-[#92400E] text-white px-6 py-3 rounded-lg hover:bg-[#A18072] transition ">
          Get in touch
        </button>
      </div>
                )}
      </div>
    </div>
  )
}
 