import classes from "./DateBox.module.css";
import { getDate, getMonth, getYear, format } from "date-fns";

export default function DateBox({ date, index }) {
  const currentDate = new Date();

  const isSameDay = getDate(date) === getDate(currentDate);
  const isSameMonth = getMonth(date) === getMonth(currentDate);
  const isSameYear = getYear(date) === getYear(currentDate);

  const isActive = isSameDay && isSameMonth && isSameYear;

  return (
    <div className={classes.dateBox}>
      {index < 7 && <p>{format(date, "EEE")}</p>}
      <p className={isActive ? classes.dateActive : ""}>{getDate(date)}</p>
    </div>
  );
}
