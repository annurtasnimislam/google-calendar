import classes from "./LeftSide.module.css";
import Calendar from "./Calendar/Calendar";

export default function LeftSide() {
  return (
    <div className={classes.leftSide}>
      <Calendar />
    </div>
  );
}
