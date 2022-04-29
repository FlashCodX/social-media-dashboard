import styles from "../styles/Card.module.css";
import { CardInterface } from "../types";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { useSelector } from "react-redux";

function Card({
  icon,
  socialRef,
  positive,
  value,
  description,
  quantity,
  borderColor,
}: CardInterface) {
  const { card, socialrefContainer, cardDescription, timestampContainer } =
    styles;
  const { appTheme }: any = useSelector((state) => state);
  return (
    <div
      className={`${card} ${
        appTheme ? "bg-light text-dark" : "bg-dark text-light"
      }`}
      style={{ borderTopColor: borderColor }}
    >
      <div
        className={`${socialrefContainer} ${
          appTheme ? "text-dark" : "text-light"
        } `}
      >
        {icon} <p>{socialRef}</p>
      </div>
      <p>{quantity}</p>
      <div
        className={`${cardDescription} ${
          appTheme ? "text-dark" : "text-light"
        }`}
      >
        {description}
      </div>
      <div className={timestampContainer}>
        {positive ? (
          <MdOutlineArrowDropUp color="lightgreen" />
        ) : (
          <MdOutlineArrowDropDown color="red" />
        )}
        <p style={positive ? { color: "lightgreen" } : { color: "red" }}>
          {value} Today
        </p>
      </div>
    </div>
  );
}

export default Card;
