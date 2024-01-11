import classes from "./DateBox.module.css";
import { getDate, format } from "date-fns";

export default function DateBox({ date, index }) {
  let currentDate = getDate(new Date());

  return (
    <div className={classes.dateBox}>
      {index < 7 && <p>{format(date, "EEE")}</p>}
      <p className={getDate(date) === currentDate ? classes.dateActive : ""}>
        {getDate(date)}
      </p>
    </div>
  );
}
