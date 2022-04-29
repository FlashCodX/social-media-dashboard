import styles from "../styles/OverviewCard.module.css";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

import { CardInterface } from "../types";
import { useSelector } from "react-redux";

function OverviewCard({
  icon,
  description,
  quantity,
  value,
  positive,
}: CardInterface) {
  const { card, titleContainer, valuesContainer } = styles;
  const { appTheme }: any = useSelector((state) => state);

  return (
    <div
      className={`${card} ${
        appTheme ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <div className={titleContainer}>
        <h1>{description}</h1>
        {icon}
      </div>
      <div className={valuesContainer}>
        <p>{value}</p>
        <div style={positive ? { color: "green" } : { color: "red" }}>
          {positive ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
          {quantity}
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
