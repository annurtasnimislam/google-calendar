import { fetchCalendarDates } from "../../../../utils/calendar";
import Text from "../Text/Text";
import classes from "./Calendar.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Calendar() {
  const currentDate = new Date();
  const calendarDates = fetchCalendarDates(currentDate);

  return (
    <div className={classes.calendar}>
      <div className={classes.haeder}>
        <p>January 2024</p>
        <div className={classes.arrow}>
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>

      <div className={classes.day}>
        {calendarDates.slice(0, 7).map(({ date }, index) => (
          <Text key={index} date={date} day />
        ))}
        {calendarDates.map(({ date }, index) => (
          <Text date={date} key={index} />
        ))}
      </div>
    </div>
  );
}
