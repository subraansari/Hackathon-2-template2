
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section aria-label="Hero Section">
        <div className="w-full h-[704px] bg-white">
          <div className="px-4 md:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center w-full md:w-[1280px] h-[584px] justify-center">
              {/* Text Section */}
              <div className="w-full md:w-[60%] flex-grow h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl md:text-4xl font-semibold leading-tight md:leading-normal text-center md:text-left">
                    The furniture brand for the <br /> future, with timeless designs
                  </h1>
                  <div className="flex justify-center md:justify-start mt-8">
                    <button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold transition-all duration-200 ease-in-out hover:bg-white hover:text-[#2A254B] focus:outline-none focus:ring-2 focus:ring-[#2A254B] focus:ring-offset-2">
                      View collection
                    </button>
                  </div>
                </div>

                <div className="my-4 md:my-0 text-center md:text-left">
                  <p className="text-sm md:text-base leading-relaxed">
                    A new era in eco-friendly furniture with Avelon, the French luxury retail brand
                    <br /> featuring nice fonts, tasteful colors, and a beautiful way to display things digitally 
                    <br /> using modern web technologies.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-[40%] w-full h-auto md:h-[580px] flex justify-center mt-8 md:mt-0">
                <Image
                  src="/chair2.png"
                  width={520}
                  height={584}
                  alt="Chair Image"
                  className="object-cover shadow-lg"
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
