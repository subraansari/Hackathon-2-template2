
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section>
        <div className='w-[1440px] h-[704px] bg-white'>
        <div className='px-48 py-12'>
          <div className='flex flex-col md:flex-row items-center w-[1280px] h-[584px]'>
            <div className='w-full md:w-[60%] flex-grow h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
              
              <div>
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the future with <br /> the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold mt-12'>
                    View collection
                  </button>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>


        {/* Image Section */}
            <div className='md:w-[40%] h-auto md:h-[580px] flex justify-center w-full'>
            
          <Image
          width={520} 
                 height={584} 
            src="/Chair.png" 
            alt="Chair Image" 
            className="object-cover" 
          />
        </div>
              
            </div>

          </div>
          </div> 
        
      </section>
    </>
  )
}

export default Hero;











