
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

const BgVideo = "/assets/images/bg.mp4";

function SectionFour({ contactForm, setContactForm }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BottomArrow />,
    prevArrow: <TopArrow />,
  };

  const [enquiryFormName, setEnquiryFormName] = useState("");
  const [enquiryFormEmail, setEnquiryFormEmail] = useState("");
  const [enquiryFormPhone, setEnquiryFormPhone] = useState("");
  const [enquiryFormMessage, setEnquiryFormMessage] = useState("");

  const [bookingFormName, setBookingFormName] = useState("");
  const [bookingFormEmail, setBookingFormEmail] = useState("");
  const [bookingFormPhone, setBookingFormPhone] = useState("");
  const [bookingFormMessage, setBookingFormMessage] = useState("");

  const handleEnquiry = (e) => {
    e.preventDefault();
    console.log(
      enquiryFormName,
      enquiryFormEmail,
      enquiryFormPhone,
      enquiryFormMessage
    );
    // Reset form
    setEnquiryFormName("");
    setEnquiryFormEmail("");
    setEnquiryFormPhone("");
    setEnquiryFormMessage("");
    alert('Enquiry submitted successfully!');
  };

  const handleBooking = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative text-white font-fritz-regular w-full h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start">

        <video className="lg:w-[60%] w-full h-full object-cover" src={BgVideo} autoPlay loop muted />


        {/* desktop form */}
        <div className="lg:absolute lg:top-1/2 lg:right-10 lg:transform lg:-translate-y-1/2 w-full lg:w-auto flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start">

          <div className="h-full flex justify-center items-center">

            {contactForm ? (
              <form
                onSubmit={handleEnquiry}
                className="720px:block hidden bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] 720px:w-[580px] w-[90%] m-auto"
              >
                <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                    Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    onChange={(e) => setEnquiryFormName(e.target.value)}
                    className="w-full text-black bg-white rounded-tl-[20px] rounded-br-[20px] px-3 py-1"
                    type="text"
                    required
                    value={enquiryFormName}
                  />
                </div>
                <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                    Phone
                  </label>
                  <input
                    onChange={(e) => setEnquiryFormPhone(e.target.value)}
                    placeholder="Phone number"
                    className="w-full px-3 text-black bg-white rounded-tl-[20px] rounded-br-[20px] py-1"
                    type="tel"
                    value={enquiryFormPhone}
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
                    className="w-full px-3 text-black bg-white rounded-tl-[20px] rounded-br-[20px] py-1"
                    type="email"
                    value={enquiryFormEmail}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D79B2A] text-black py-2 rounded uppercase font-medium mt-4 hover:bg-[#b88a24] transition-colors"
                >
                  Submit
                </button>
              </form>
            ) : (
              <form
                onSubmit={handleBooking}
                className="720px:block hidden bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] 720px:w-[580px] w-[90%] m-auto"
              >
                <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                    Name
                  </label>
                  <input
                    onChange={(e) => setBookingFormName(e.target.value)}
                    placeholder="Please enter your name"
                    className="w-full text-black bg-white rounded-tl-[20px] rounded-br-[20px] px-3 py-1"
                    type="text"
                    value={bookingFormName}
                    required
                  />
                </div>
                <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                    Email ID
                  </label>
                  <input
                    onChange={(e) => setBookingFormEmail(e.target.value)}
                    className="w-full rounded-tl-[20px] px-3 text-black bg-white rounded-br-[20px] py-1"
                    type="email"
                    placeholder="Enter your Mail-ID"
                    value={bookingFormEmail}
                    required
                  />
                </div>
                <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                    Phone Number
                  </label>
                  <input
                    placeholder="Phone Number"
                    onChange={(e) => setBookingFormPhone(e.target.value)}
                    className="w-full px-3 text-black bg-white rounded-tl-[20px] rounded-br-[20px] py-1"
                    type="text"
                    value={bookingFormPhone}
                    required
                  />
                </div>
                <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                   Message
                  </label>
                  <input
                    placeholder="Message"
                    onChange={(e) => setBookingFormMessage(e.target.value)}
                    className="w-full px-3 text-black bg-white rounded-tl-[20px] rounded-br-[20px] py-1"
                    type="text"
                    value={bookingFormMessage}
                    required
                  />
                </div>

                <button type="submit" className="absolute bottom-4 left-6 bg-white uppercase text-[#D79B2A]">
                  Sent
                </button>
              </form>
            )}
          </div>
          {/* desktop form */}

          {/* mobile */}

          {contactForm ? (
            <form
              onSubmit={handleEnquiry}
              className="720px:hidden block bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] w-[100%] h-fit m-auto mt-2"
            >
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Name
                </label>
                <input
                  onChange={(e) => setEnquiryFormName(e.target.value)}
                  placeholder="Enter your name"
                  value={enquiryFormName}
                  className=" text-black bg-white px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Phone
                </label>
                <input
                  onChange={(e) => setEnquiryFormPhone(e.target.value)}
                  placeholder="Phone number"
                  value={enquiryFormPhone}
                  className=" text-black bg-white px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="tel"
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Email ID
                </label>
                <input
                  onChange={(e) => setEnquiryFormEmail(e.target.value)}
                  placeholder="Mail-ID"
                  value={enquiryFormEmail}
                  className=" text-black bg-white px-4 w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="email"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-[#D79B2A] text-black py-2 rounded uppercase font-medium mt-4 hover:bg-[#b88a24] transition-colors">
                Submit
              </button>
            </form>
          ) : (
            <form
              onSubmit={handleBooking}
              className="720px:hidden block bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] w-[90%] h-[455px] m-auto mt-24"
            >

              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Name
                </label>
                <input
                  onChange={(e) => setBookingFormName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full text-black bg-white rounded-tl-[20px] rounded-br-[20px] px-3 py-1"
                  type="text"
                  value={bookingFormName}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Email ID
                </label>
                <input
                  onChange={(e) => setBookingFormEmail(e.target.value)}
                  className="w-full rounded-tl-[20px] px-3 text-black bg-white rounded-br-[20px] py-1"
                  type="email"
                  placeholder="Enter your Mail-ID"
                  value={bookingFormEmail}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Phone Number
                </label>
                <input
                  placeholder="Phone Number"
                  onChange={(e) => setBookingFormPhone(e.target.value)}
                  className="w-full px-3 text-black bg-white rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormPhone}
                  required
                />
              </div>
               <div className="flex justify-between items-center my-2">
                  <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                   Message
                  </label>
                  <textarea
                    placeholder="Message"
                    onChange={(e) => setBookingFormMessage(e.target.value)}
                    className="w-full h-[213px] px-3 text-black bg-white rounded-tl-[20px] rounded-br-[20px] py-1"
                    type="text"
                    value={bookingFormMessage}
                    required
                  />
                </div>

              <button type="submit" className="absolute bottom-4 rounded-tl-[10px] rounded-br-[10px] px-2 py-2 left-6 bg-white uppercase text-[#D79B2A]">
                Sent
              </button>
            </form>
          )}
        </div>

        {/* mobile */}
      </div>
      <div id="charters-section4" className="w-full ">

        {/* testimonials */}
        <div className="absolute top-1/2 left-[507px] transform -translate-x-1/2 -translate-y-1/2 sm:w-[324px] lg:w-[405px] w-[80%] rounded-[24px] h-[175px] bg-black/90 z-20">
          <Slider className="w-full h-full flex p-4" {...settings}>
            <div className=" h-full flex-1 flex justify-center items-center w-full">
              <div className="flex h-full w-full pt-7 px-6 ">
                <p className="text-balance font-fritz-regular flex-1 font-light  text-[13px]">
                  Lorem ipsum dolor sit amet cemque provident quam voluptates,
                  accusanibusdam cumque hic itaque expedita culpa!
                  Doloremqueconsequatur est, facere doloribus? Molestiae
                  repellat alias rerum fuga explicabo temporibus natus, debitis
                  rem cupiditate et.
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
                  alt="images"
                  width={43}
                  height={43}
                  className="w-[43px] h-[43px] rounded-full object-cover"
                />
              </div>

              <q className="px-6  font-fritz-regular text-[12px] font-semibold">
                - By
              </q>
            </div>
            <div className=" h-full flex-1 flex justify-center items-center w-full">
              <div className="flex h-full w-full pt-7 px-6 ">
                <p className="text-balance font-fritz-regular flex-1 font-light  text-[13px]">
                  Lorem ipsum dolor sit amet cemque provident quam voluptates,
                  accusanibusdam cumque hic itaque expedita culpa!
                  Doloremqueconsequatur est, facere doloribus? Molestiae
                  repellat alias rerum fuga explicabo temporibus natus, debitis
                  rem cupiditate et.
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
                  alt="images"
                  width={43}
                  height={43}
                  className="w-[43px] h-[43px] rounded-full object-cover"
                />
              </div>

              <q className="px-6  font-fritz-regular text-[12px] font-semibold">
                - By
              </q>
            </div>
          </Slider>
        </div>
        {/* testimonials */}
      </div>




    </section>
  );
}

export default SectionFour;

// Custom left arrow
const TopArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} custom-arrow-left`}
      onClick={onClick}
      style={{ ...style, left: '9px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
    >
      ←
    </div>
  );
};

// Custom right arrow
const BottomArrow = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={`${className} custom-arrow-right`}
      onClick={onClick}
      style={{ ...style, right: '39px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}
    >
      →
    </div>
  );
};
