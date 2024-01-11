import classes from "./Text.module.css";
import { getDate, format } from "date-fns";

export default function Text({ date, day }) {
  let currentDate = getDate(new Date());

  return (
    <div
      className={
        getDate(date) === currentDate ? classes.dateActive : classes.text
      }
    >
      <p>{day ? format(date, "E").charAt(0) : getDate(date)}</p>
    </div>
  );
}
