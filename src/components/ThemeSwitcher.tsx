import styles from "../styles/ThemeSwitcher.module.css";
import { ThemeModes } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const { setAppTheme } = bindActionCreators(actionCreators, dispatch);
  const { themeSwitcher, switchElement, slider } = styles;
  const { appTheme }: any = useSelector((state) => state);

  return (
    <div className={themeSwitcher}>
      <h1>{appTheme ? "Light" : "Dark"} Mode</h1>
      <label className={switchElement}>
        <input
          onChange={(e) =>
            e.target.checked
              ? setAppTheme(ThemeModes.light)
              : setAppTheme(ThemeModes.dark)
          }
          type="checkbox"
        />
        <span className={slider}></span>
      </label>
    </div>
  );
}

export default ThemeSwitcher;
