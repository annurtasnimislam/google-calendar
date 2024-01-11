import classes from "./Text.module.css";
import { getDate, getMonth, getYear, format } from "date-fns";

export default function Text({ date, day }) {
  const currentDate = new Date();

  const isSameDay = getDate(date) === getDate(currentDate);
  const isSameMonth = getMonth(date) === getMonth(currentDate);
  const isSameYear = getYear(date) === getYear(currentDate);

  const isActive = isSameDay && isSameMonth && isSameYear;

  return (
    <div className={isActive ? classes.dateActive : classes.text}>
      <p>{day ? format(date, "E").charAt(0) : getDate(date)}</p>
    </div>
  );
}
