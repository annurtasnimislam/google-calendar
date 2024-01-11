import DateBox from "./DateBox/DateBox";
import classes from "./Home.module.css";
import { fetchCalendarDates } from "../../utils/calendar";

export default function Home() {
  const currentDate = new Date();
  const calendarDates = fetchCalendarDates(currentDate);

  return (
    <div className={classes.home}>
      {calendarDates.map(({ date }, index) => (
        <DateBox date={date} key={index} index={index} />
      ))}
    </div>
  );
}
