import classes from "./Text.module.css";
import { getDate, format } from "date-fns";

export default function Text({ date, day }) {
  return (
    <p className={classes.text}>
      {day ? format(date, "E").charAt(0) : getDate(date)}
    </p>
  );
}
