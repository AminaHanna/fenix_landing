import React, { useEffect, useRef, useState } from 'react'

import clsx from 'clsx';
import Link from 'next/link';
import { allStaticData, jestData } from '../../lib/data';




function SectionTwo() {

  const [bgFixed, setBgFixed] = useState(false);
  const divRef = useRef(null);


  const handleScroll = () => {
    if (typeof window === 'undefined') return;
    if (divRef.current) {
      const { scrollHeight, clientHeight } = divRef.current;
      if (scrollHeight <= window.scrollY) {
        setBgFixed(true);
      } else {
        setBgFixed(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const [activeJet, setActiveJet] = useState(1);

  return (
    <section className=" relative text-white font-fritz-regular w-full min-h-screen">
      <div ref={divRef} id="charters-section2" className={`w-full flex justify-center items-center h-full ${bgFixed ? 'bg-fixed ' : ''}`}>
        <div className="w-full h-full">

          <div className="px-[16px] w-full min-h-[400px] max-w-[850px] mt-20 flex flex-col justify-center items-center m-auto h-fit ">
            <h3 className='text-[24px] font-fritz-regular font-medium'>Private Jet Fleet</h3>
            <h2 className='text-[40px] text-center sm:text-[52px] font-fritz-regular font-medium'><span className='text-[#D79B2A]'>Explore</span> a Global Fleet of <span className='text-[#D79B2A]'>7000+</span> Jets</h2>
            <p className='font-fritz-regular font-[17px] text-center'>Discover a range of aircraft from very light jets up to commercial airliners. Experience the pinnacle of choice and quality for every journey.
            </p>
          </div>

          <div className="">
            <div className="grid bg-gradient-to-b  to-black from-transparent  grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 px-6 gap-5  md:gap-24">

              {
                jestData.map((item, index) => (
                  <div onClick={() => {
                    setActiveJet(item.id);
                  }} key={index} className="cursor-pointer  relative w-full h-full  flex flex-col justify-center items-center">
                    <img src={item.img} alt="" className="w-[100px] h-[60px] object-contain" />
                    <h3 className={clsx("text-nowrap font-fritz-regular font-semibold text-[20px]", activeJet === item.id ? "text-[#D79B2A]" : "text-white/60")}>{item.title}</h3>
                    {
                      item?.id === activeJet && <div className="w-[80px] -bottom-2 left-5 absolute h-1 bg-[#D79B2A] rounded-full"></div>
                    }
                  </div>
                ))
              } 
              </div>

            <div className="pt-20 bg-black">


              <h2 className='text-[30px] font-medium px-6'>
                {(() => {
                  const words = jestData?.find(item => item?.id === activeJet)?.title.split(' ');
                  const lastWord = words?.pop(); // remove and get the last word
                  return (
                    <>
                      {words?.join(' ')}{' '}
                      <span className='text-[#D79B2A]'>
                        {lastWord}
                      </span>
                    </>
                  );
                })()}
              </h2>
            </div>



            <div className="grid bg-black gap-4 grid-cols-2 md:grid-cols-4 px-6 py-20">
              {
                allStaticData?.filter(item => item?.categoryId === activeJet)?.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/cargo/aircraft/categories/${item?.slug}`}
                  >
                    <div className="w-full rounded-[5px] overflow-hidden h-full flex flex-col justify-center items-center">
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <img src={item.gallery[0]?.url} alt="" className="w-full h-[180px] object-cover" />
                        <div className="flex p-3 flex-col gap-2 bg-[#161616] w-full h-[80px] pt-2">

                          <h3 className={clsx(" font-fritz-regular font-normal text-[20px]")}>{item?.title}</h3>
                          <div className="flex justify-between">
                            <p className='text-[14px] font-fritz-regular font-normal'>Up to {item?.maxFlightTime}</p>
                            <p className='text-[14px] font-fritz-regular font-normal'>Up to {item?.maxPassangers} Passengers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                ))
              }
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default SectionTwo
