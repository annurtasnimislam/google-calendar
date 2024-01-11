import classes from "./DateBox.module.css";
import { getDate, format } from "date-fns";

export default function DateBox({ date, index }) {
  return (
    <div className={classes.dateBox}>
      {index < 7 && <p>{format(date, "EEE")}</p>}
      <p>{getDate(date)}</p>
    </div>
  );
}
