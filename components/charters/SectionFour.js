"use client";

import { useState } from "react";
import Slider from "react-slick";

export default function SectionFour({ contactForm, setContactForm }) {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1 };

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
    console.log({
      enquiryFormCompany,
      enquiryFormEmail,
      enquiryFormMessage,
      enquiryFormMob,
      enquiryFormName,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    console.log({
      bookigFormName,
      bookingFormEmail,
      bookingFormPhoneNumber,
      bookingFormDepartureDate,
      bookingFormDeparture,
      bookingFormArrival,
      bookingFormNoOfLuggage,
      bookingFormLuggageSize,
    });
  };

  return (
    <section className="relative text-white font-fritz-regular w-full h-[120vh] lg:h-screen">
      {/* Background video from /public/videos */}
      <video className="lg:w-[60%] w-full h-full object-cover" src="/videos/bg.mp4" autoPlay loop muted />

      <div id="charters-section4" className="w-full absolute top-0 left-0 h-full">
        {/* Desktop form */}
        <div>
         
          {contactForm ? (
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
          ) : (
            <form
              onSubmit={handleBooking}
              className="720px:block hidden bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] 720px:w-[580px] w-[90%] m-auto h-[400px] top-40  720px:top-44 absolute right-0 720px:right-20"
            >
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                  Name
                </label>
                <input
                  onChange={(e) => setBookingFormName(e.target.value)}
                  placeholder="Please enter your name"
                  className="w-full text-black rounded-tl-[20px] rounded-br-[20px] px-3 py-1"
                  type="text"
                  value={bookigFormName}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                  Email ID
                </label>
                <input
                  onChange={(e) => setBookingFormEmail(e.target.value)}
                  className="w-full rounded-tl-[20px] px-3 text-black rounded-br-[20px] py-1"
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
                  onChange={(e) => setBookingFormPhoneNumber(e.target.value)}
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormPhoneNumber}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                  Departure Date
                </label>
                <input
                  required
                  placeholder="Choose your date"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="date"
                  value={bookingFormDepartureDate}
                  onChange={(e) => setBookingFormDepartureDate(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                  Departure
                </label>
                <input
                  placeholder="Departure"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormDeparture}
                  required
                  onChange={(e) => setBookingFormDeparture(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                  Arrival
                </label>
                <input
                  required
                  placeholder="Arrival"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormArrival}
                  onChange={(e) => setBookingFormArrival(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[165px] text-[#D79B2A]">
                  No. Of Luggage
                </label>
                <input
                  required
                  placeholder="No. Of Luggage"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  value={bookingFormNoOfLuggage}
                  type="text"
                  onChange={(e) => setBookingFormNoOfLuggage(e.target.value)}
                />
              </div>
              <div className="flex justify-start items-start my-2 text-black">
                <label htmlFor="" className="w-[125px] text-[#D79B2A]">
                  Luggage Size
                </label>
                <select
                  name="luggage-size"
                  required
                  onChange={(e) => setBookingFormLuggageSize(e.target.value)}
                  id=""
                  className="rounded-sm p-0 rounded-tl-[20px] rounded-br-[20px] py-1 px-3 outline-none"
                >
                  <option value="">Choose</option>
                  <option value="hand-luggage">Hand Luggage</option>
                  <option value="standard-trolly">Standard Trolly</option>
                  <option value="large-bags">Large Bags</option>
                  <option value="extra-large-bags">Extra Large Bags</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="absolute bottom-4 left-6 uppercase text-[#D79B2A]">
                Sent
              </button>
            </form>
          )}
        </div>
        {/* Mobile forms */}
        {contactForm ? (
          <form
          onSubmit={handleEnquiry}
            className="720px:hidden block bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] absolute top-32 left-7 rounded-br-[20px] w-[90%] h-fit "
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
                 onChange={(e)=> setEnquiryFormName(e.target.value) }
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
        ) : (
          <form
          onSubmit={handleBooking}
            className="720px:hidden block bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] absolute top-32 left-7 rounded-br-[20px] w-[90%] h-[455px] "
          >

            <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Name
                </label>
                <input
                  onChange={(e) => setBookingFormName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full text-black rounded-tl-[20px] rounded-br-[20px] px-3 py-1"
                  type="text"
                  value={bookigFormName}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Email ID
                </label>
                <input
                  onChange={(e) => setBookingFormEmail(e.target.value)}
                  className="w-full rounded-tl-[20px] px-3 text-black rounded-br-[20px] py-1"
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
                  onChange={(e) => setBookingFormPhoneNumber(e.target.value)}
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormPhoneNumber}
                  required
                />
              </div>
              <div className="flex justify-between items-center my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Departure Date
                </label>
                <input
                  required
                  placeholder="Choose your date"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="date"
                  value={bookingFormDepartureDate}
                  onChange={(e) => setBookingFormDepartureDate(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Departure
                </label>
                <input
                  placeholder="Departure"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormDeparture}
                  required
                  onChange={(e) => setBookingFormDeparture(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                  Arrival
                </label>
                <input
                  required
                  placeholder="Arrival"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  type="text"
                  value={bookingFormArrival}
                  onChange={(e) => setBookingFormArrival(e.target.value)}
                />
              </div>
              <div className="flex justify-between items-start my-2">
                <label htmlFor="" className="w-[140px] text-[#D79B2A]">
                No. Of Luggage
                </label>
                <input
                  required
                  placeholder="No. Of Luggage"
                  className="w-full px-3 text-black rounded-tl-[20px] rounded-br-[20px] py-1"
                  value={bookingFormNoOfLuggage}
                  type="text"
                  onChange={(e) => setBookingFormNoOfLuggage(e.target.value)}
                />
              </div>
              <div className="flex justify-start items-start my-2 text-black">
                <label htmlFor="" className="w-[90px] text-[#D79B2A]">
                  Luggage Size
                </label>
                <select
                  name="luggage-size"
                  required
                  onChange={(e) => setBookingFormLuggageSize(e.target.value)}
                  id=""
                  className="rounded-sm p-0 rounded-tl-[20px] rounded-br-[20px] py-1 px-3 outline-none"
                >
                  <option value="">Choose</option>
                  <option value="hand-luggage">Hand Luggage</option>
                  <option value="standard-trolly">Standard Trolly</option>
                  <option value="large-bags">Large Bags</option>
                  <option value="extra-large-bags">Extra Large Bags</option>
                  <option value="others">Others</option>
                </select>
              </div> 

            <button type="submit" className="absolute bottom-4 left-6 uppercase text-[#D79B2A]">
              Sent
            </button>
          </form>
        )}

        {/* Testimonials */}
        <div className="absolute sm:w-[324px] w-[80%]  rounded-[24px] h-[175px] lg:top-[350px] bottom-24 left-10 md:left-24 bg-black/90">
          <Slider className="w-full h-full flex" {...settings}>
            <div className=" h-full flex-1 flex justify-center items-center w-full">
              <div className="flex h-full w-full pt-7 px-6 ">
                <p className="text-balance font-fritz-regular flex-1 font-light  text-[10px]">
                  Lorem ipsum dolor sit amet cemque provident quam voluptates,
                  accusanibusdam cumque hic itaque expedita culpa!
                  Doloremqueconsequatur est, facere doloribus? Molestiae
                  repellat alias rerum fuga explicabo temporibus natus, debitis
                  rem cupiditate et.
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
                  alt="images"
                  className="w-[43px] h-[43px] rounded-full object-cover"
                />
              </div>

              <q className="px-6  font-fritz-regular text-[12px] font-semibold">
                - By
              </q>
            </div>
            <div className=" h-full flex-1 flex justify-center items-center w-full">
              <div className="flex h-full w-full pt-7 px-6 ">
                <p className="text-balance font-fritz-regular flex-1 font-light  text-[10px]">
                  Lorem ipsum dolor sit amet cemque provident quam voluptates,
                  accusanibusdam cumque hic itaque expedita culpa!
                  Doloremqueconsequatur est, facere doloribus? Molestiae
                  repellat alias rerum fuga explicabo temporibus natus, debitis
                  rem cupiditate et.
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
                  alt="images"
                  className="w-[43px] h-[43px] rounded-full object-cover"
                />
              </div>

              <q className="px-6  font-fritz-regular text-[12px] font-semibold">
                - By
              </q>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}
