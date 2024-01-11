import classes from "./Navbar.module.css";
import icon from "../../../assets/Navbar/google-calendar.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import user from "../../../assets/Navbar/user.jpg";
import hamburger from "../../../assets/Navbar/hamburger.png";
import menu from "../../../assets/Navbar/dots.png";
import { format, addMonths, subMonths } from "date-fns";

export default function Navbar({ currentMonth, setCurrentMonth }) {
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navLeft}>
        <div className={classes.hamburger}>
          <img src={hamburger} alt="hamburger" />
          <img src={icon} alt="date" />
          <p>Calendar</p>
        </div>
        <div className={classes.center}>
          <p>Today</p>
          <IoIosArrowBack onClick={prevMonth} />
          <IoIosArrowForward onClick={nextMonth} />
          <p>{format(currentMonth, "MMMM yyyy")}</p>
        </div>
      </div>
      <div className={classes.navRight}>
        <img src={menu} alt="" />
        <div className={classes.profile}>
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
}
