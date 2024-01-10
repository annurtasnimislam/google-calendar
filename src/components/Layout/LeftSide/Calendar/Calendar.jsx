import Text from "../Text/Text";
import classes from "./Calendar.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Calendar() {
  return (
    <div className={classes.calendar}>
      <div className={classes.haeder}>
        <p>January 2024</p>
        <div className={classes.arrow}>
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>

      <div className={classes.day}>
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
        <Text />
      </div>
    </div>
  );
}
