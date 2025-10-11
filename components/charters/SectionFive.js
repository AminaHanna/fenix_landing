import AviationCalendar from "../AviationCalendar/AviationCalendar"
import Calender from "../AviationCalendar/Calender";
import CalendarPicker from "../AviationCalendar/Calender";
function SectionFive() {


  return (
    <section className="relative text-white font-fritz-regular w-full h-screen">
      <div id="charters-section5" className="w-full h-full">
        <div className="">
          {/* <AviationCalendar/> */}
          {/* <CalendarPicker/> */}
          <Calender/>
          
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
