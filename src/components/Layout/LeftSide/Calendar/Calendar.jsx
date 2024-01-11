import { fetchCalendarDates } from "../../../../utils/calendar";
import Text from "../Text/Text";
import classes from "./Calendar.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { format, addMonths, subMonths } from "date-fns";
import { useEffect, useState } from "react";

export default function Calendar({ currentMonth }) {
  const [month, setMonth] = useState(currentMonth);

  useEffect(() => {
    setMonth(currentMonth);
  }, [currentMonth]);

  const calendarDates = fetchCalendarDates(month);

  const prevMonth = () => {
    setMonth(subMonths(month, 1));
  };

  const nextMonth = () => {
    setMonth(addMonths(month, 1));
  };

  return (
    <div className={classes.calendar}>
      <div className={classes.haeder}>
        <p>{format(month, "MMMM yyyy")}</p>
        <div className={classes.arrow}>
          <IoIosArrowBack onClick={prevMonth} />
          <IoIosArrowForward onClick={nextMonth} />
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
