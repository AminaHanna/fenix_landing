"use client";


import "./index.css"
import footerWindows from "../../../public/Windows.svg"

function SectionSix() {
  return (
    <section className="relative text-white bg-white flex font-fritz-regular w-full h-screen">
      <p
        className=" 830px:text-[25px] text-[24px] absolute 830px:p-0 p-[16px] backdrop-blur-[15px] 830px:backdrop-filter-none 830px:top-40 top-36 left-6 right-6  text-black justify-center font-light  font-fritz-regular text-3xl w-[88%]"
      >
        Meet Our Team

        <div id={'section6'} className={`flex disable-scroll-view gap-10 md:max-w-full justify-center items-center ps-0 sm:ps-20 w-full overflow-scroll md:overflow-auto mt-12 h-full bg-fixed`}>
          <div className="relative w-[200px]  flex-shrink-0 flex-grow-0 flex justify-center items-center">
            <img 
            // src={footerWindows} 
            src="/windows.svg"
            alt=""

              className='w-[200px] h-[260px] '

            />
            <div className=" absolute w-full top-0 left-0 h-full  flex justify-center items-center">


              <h3 className='text-[16px]  font-medium'>Captain Jesjohn</h3>
            </div>
          </div>

             <div className="relative  w-[200px] flex-shrink-0 flex-grow-0  flex justify-center items-center">
            <img 
            // src={footerWindows}
            src="/windows.svg"
            alt=""

              className='w-[200px] h-[260px] '

            />
            <div className=" absolute w-full top-0 left-0 h-full  flex justify-center items-center">


              <h3 className='text-[16px]  font-medium'>Captain Mariya </h3>
            </div>
          </div>

          <div className="relative   w-[200px]  flex-shrink-0 flex-grow-0 flex justify-center items-center">
            <img 
            // src={footerWindows}
            src="/windows.svg" 
            alt=""

              className='w-[200px] h-[260px] '

            />
            <div className=" absolute w-full top-0 left-0 h-full  flex justify-center items-center">


              <h3 className='text-[16px]  font-medium'>Captain Kedher</h3>
            </div>
          </div>

          <div className="relative  w-[200px] flex-shrink-0 flex-grow-0 flex justify-center items-center">
            <img 
            // src={footerWindows} 
            src="/windows.svg"
            alt=""

              className='w-[200px] h-[260px] '

            />
            <div className=" absolute w-full top-0 left-0 h-full  flex justify-center items-center">


              <h3 className='text-[16px]  font-medium'>Captain John</h3>
            </div>
          </div>

          <div className="relative  w-[200px] flex-shrink-0 flex-grow-0 flex justify-center items-center">
            <img 
            // src={footerWindows} 
            src="/windows.svg"
            alt=""

              className='w-[200px] h-[260px] '

            />
            <div className=" absolute w-full top-0 left-0 h-full  flex justify-center items-center">


              <h3 className='text-[16px]  font-medium'>Captain Hemanth</h3>
            </div>
          </div>


        </div>
      </p>

    </section>
  )
}

export default SectionSix
