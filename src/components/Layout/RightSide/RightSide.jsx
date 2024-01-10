import classes from "./RightSide.module.css";
import light from "../../../assets/RightSide/light.png";
import check from "../../../assets/RightSide/verified.png";
import user from "../../../assets/RightSide/user2.png";
import map from "../../../assets/RightSide/google-maps.png";
import add from "../../../assets/RightSide/add.png";
import { IoIosArrowForward } from "react-icons/io";

export default function RightSide() {
  return (
    <div className={classes.rightSide}>
      <div className={classes.top}>
        <img src={light} alt="light" />
        <img src={check} alt="check" />
        <img src={user} alt="user" />
        <img src={map} alt="map" />
        <div></div>
        <img src={add} alt="add" />
      </div>
      <IoIosArrowForward />
    </div>
  );
}
