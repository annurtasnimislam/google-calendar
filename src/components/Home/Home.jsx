import DateBox from "./DateBox/DateBox";
import classes from "./Home.module.css";
import { fetchCalendarDates } from "../../utils/calendar";

export default function Home({ currentMonth }) {
  const calendarDates = fetchCalendarDates(currentMonth);

  return (
    <div className={classes.home}>
      {calendarDates.slice(0, 35).map(({ date }, index) => (
        <DateBox date={date} key={index} index={index} />
      ))}
    </div>
  );
}
