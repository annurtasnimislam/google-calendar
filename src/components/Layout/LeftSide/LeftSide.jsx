import classes from "./LeftSide.module.css";
import Calendar from "./Calendar/Calendar";

export default function LeftSide({ currentMonth }) {
  return (
    <div className={classes.leftSide}>
      <Calendar currentMonth={currentMonth} />
    </div>
  );
}
