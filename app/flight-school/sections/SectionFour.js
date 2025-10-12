"use client";

import { useState } from "react";
import Slider from "react-slick";

function SectionFour({ contactForm, setContactForm }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [enquiryFormName, setEnquiryFormName] = useState("");
  const [enquiryFormCompany, setEnquiryFormCompany] = useState("");
  const [enquiryFormMob, setEnquiryFormMob] = useState("");
  const [enquiryFormEmail, setEnquiryFormEmail] = useState("");
  const [enquiryFormMessage, setEnquiryFormMessage] = useState("");

  const [bookigFormName, setBookingFormName] = useState("");
  const [bookingFormEmail, setBookingFormEmail] = useState("");
  const [bookingFormPhoneNumber, setBookingFormPhoneNumber] = useState("");
  const [bookingFormDepartureDate, setBookingFormDepartureDate] = useState("");
  const [bookingFormDeparture, setBookingFormDeparture] = useState("");
  const [bookingFormArrival, setBookingFormArrival] = useState("");
  const [bookingFormNoOfLuggage, setBookingFormNoOfLuggage] = useState("");
  const [bookingFormLuggageSize, setBookingFormLuggageSize] = useState("");

  const handleEnquiry = (e) => {
    e.preventDefault();
    console.log(
      enquiryFormCompany,
      enquiryFormEmail,
      enquiryFormMessage,
      enquiryFormMob,
      enquiryFormMob,
      enquiryFormName
    );
  };

  const handleBooking = (e) => {
    e.preventDefault();
  };

  return (
    <section id="section4" className="relative text-white font-fritz-regular w-full h-screen">
      <video className="lg:w-[60%] w-full h-full object-cover" src="/assets/images/bg.mp4" autoPlay loop muted  />

      <div id="fourth-section" className="w-full absolute top-0 left-0 h-full ">
        {/* desktop form */}

        <div>
         
          
            <form
              onSubmit={handleEnquiry}
              className="720px:block hidden bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] 720px:w-[580px] w-[90%] m-auto h-fit top-40  720px:top-44 absolute right-0 720px:right-20"
            >
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Name
                </label>
                <input
                  placeholder="Enter your name"
                  onChange={(e) => setEnquiryFormName(e.target.value)}
                  className="w-full text-black rounded-tl-[20px] rounded-br-[20px] px-3 py-1"
                  type="text"
                  required
                  value={enquiryFormName}
                />
              </div>
              <div className="flex justify-start items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Company
                </label>
                <input
                  onChange={(e) => setEnquiryFormCompany(e.target.value)}
                  placeholder="Company"
                  className="w-full rounded-tl-[20px] px-3 text-black rounded-br-[20px] py-1"
                  type="text"
                  value={enquiryFormCompany}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Mob./Cell Ph.
                </label>
                <input
                  onChange={(e) => setEnquiryFormMob(e.target.value)}
                  placeholder="Phone number"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="tel"
                  value={enquiryFormMob}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Email ID
                </label>
                <input
                  onChange={(e) => setEnquiryFormEmail(e.target.value)}
                  placeholder="Mail ID"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="email"
                  value={enquiryFormEmail}
                  required
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Message
                </label>
                <textarea
                  placeholder="Type here..."
                  name=""
                  onChange={(e) => setEnquiryFormMessage(e.target.value)}
                  className="w-full px-3 text-black h-[130px] rounded-tl-[20px] rounded-br-[20px] py-1"
                  required
                  value={enquiryFormMessage}
                  id=""
                ></textarea>
              </div>

              <button
                type="submit"
                className="absolute bottom-4 text-[#D79B2A] left-6 uppercase"
              >
                Sent
              </button>
            </form>
          
        </div>
        {/* desktop form */}

   
         
       

          <form
          onSubmit={handleEnquiry}
            className="720px:hidden block bg-[#3C3C3B] px-6 pt-3 pb-1 mx-4 rounded-tl-[20px] absolute top-32 992px:left-7  rounded-br-[20px] w-ful h-fit "
          >
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                Name
              </label>
              <input
              onChange={(e)=> setEnquiryFormName(e.target.value) }
              placeholder="Enter your name"
              value={enquiryFormName}
                className=" text-black px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                Company
              </label>
              <input
                className=" text-black px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="text"
                onChange={(e)=> setEnquiryFormCompany(e.target.value) }
              placeholder="Company"
              value={enquiryFormCompany}
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                Mob./Cell Ph.
              </label>
              <input
                 onChange={(e)=> setEnquiryFormMob(e.target.value) }
              placeholder="Phone number"
              value={enquiryFormMob}
                className=" text-black px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="tel"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                Email ID
              </label>
              <input
                 onChange={(e)=> setEnquiryFormEmail(e.target.value) }
              placeholder="Mail-ID"
              value={enquiryFormEmail}
                className=" text-black px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="email"
              />
            </div>
            <div className="flex justify-between items-start my-2">
              <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                Message
              </label>
              <textarea
                name=""
                onChange={(e)=> setEnquiryFormMessage(e.target.value) }
              placeholder="Type here..."
              value={enquiryFormMessage}
                className="text-black px-4 w-full h-[130px] rounded-tl-[20px] rounded-br-[20px] py-1"
                id=""
              ></textarea>
            </div>

            <button className="absolute bottom-4 left-6 uppercase text-[#D79B2A]">
              Sent
            </button>
          </form>
         

        

        {/* mobile */}

      </div>
    </section>
  );
}

export default SectionFour;
