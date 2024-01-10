import classes from "./Navbar.module.css";
import icon from "../../../assets/Navbar/google-calendar.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import user from "../../../assets/Navbar/user.jpg";
import menu from "../../../assets/Navbar/menu.png";

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navLeft}>
        <div className={classes.hamburger}>
          <img src={menu} alt="hamburger" />
          <img src={icon} alt="date" />
          <p>Calendar</p>
        </div>
        <div className={classes.center}>
          <p>Today</p>
          <IoIosArrowBack />
          <IoIosArrowForward />
          <p>January 2024</p>
        </div>
      </div>
      <div className={classes.navRight}>
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
