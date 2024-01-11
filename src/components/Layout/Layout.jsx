import Navbar from "./Navbar/Navbar";
import classes from "./Layout.module.css";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

export default function Layout(props) {
  return (
    <div className={classes.layout}>
      <Navbar
        currentMonth={props.currentMonth}
        setCurrentMonth={props.setCurrentMonth}
      />
      <div className={classes.container}>
        <div>
          <LeftSide currentMonth={props.currentMonth} />
        </div>
        <div>{props.children}</div>
        <div>
          <RightSide />
        </div>
      </div>
    </div>
  );
}
