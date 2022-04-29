import { useEffect } from "react";
import styles from "../styles/App.module.css";
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Card from "./Card";
import ThemeSwitcher from "./ThemeSwitcher";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import OverviewCard from "./OverviewCard";

function App() {
  const { container, heading, cardsContainer, title } = styles;
  const { appTheme }: any = useSelector((state) => state);
  useEffect(() => {
    appTheme === 0
      ? (document.body.style.background = "var(--dark-bg)")
      : (document.body.style.background = "var(--light-bg)");
  }, [appTheme]);
  return (
    <>
      <main className={`${container}`}>
        <div className={`${heading} ${appTheme ? "text-dark" : "text-white"}`}>
          <div className={title}>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23.004</p>
          </div>
          <ThemeSwitcher />
        </div>
        <div className={cardsContainer}>
          <Card
            icon={<AiFillFacebook color="hsl(208, 92%, 53%)" fontSize={25} />}
            socialRef={"@nathanf"}
            quantity={"1987"}
            borderColor="hsl(208, 92%, 53%)"
            positive={true}
            value={"144"}
            description={"Followers"}
          />
          <Card
            borderColor="hsl(203, 89%, 53%)"
            icon={<BsTwitter color="hsl(203, 89%, 53%)" fontSize={25} />}
            socialRef={"@nathanf"}
            quantity={"1044"}
            positive={true}
            value={"144"}
            description={"Followers"}
          />
          <Card
            borderColor="orange"
            icon={
              <AiOutlineInstagram
                color="linear-gradient(180deg,hsl(37, 97%, 70%), hsl(329, 70%, 58%))"
                fontSize={25}
              />
            }
            socialRef={"@realnathanf"}
            quantity={"11K"}
            positive={true}
            value={"144"}
            description={"Followers"}
          />
          <Card
            borderColor="hsl(348, 97%, 39%)"
            icon={<AiFillYoutube color="hsl(348, 97%, 39%)" fontSize={25} />}
            socialRef={"Nathan F."}
            quantity={"8239"}
            positive={false}
            value={"144"}
            description={"Subscribers"}
          />
        </div>
        <div className={heading}>
          <h1>Overview - Today</h1>
        </div>

        <div className={cardsContainer}>
          <OverviewCard
            icon={<AiFillFacebook color="hsl(208, 92%, 53%)" fontSize={25} />}
            description="Page Views"
            positive={true}
            value={"87"}
            quantity="3%"
            socialRef=""
          />
          <OverviewCard
            icon={<AiFillFacebook color="hsl(208, 92%, 53%)" fontSize={25} />}
            description="Likes"
            quantity="2%"
            positive={false}
            value={"52"}
            socialRef=""
          />
          <OverviewCard
            icon={
              <AiOutlineInstagram color="hsl(37, 97%, 70%)" fontSize={25} />
            }
            description="Likes"
            quantity="2257%"
            positive={true}
            value={"5462"}
            socialRef=""
          />
          <OverviewCard
            icon={
              <AiOutlineInstagram color="hsl(37, 97%, 70%)" fontSize={25} />
            }
            description="Profile Views"
            positive={true}
            value={"52K"}
            quantity="1375%"
            socialRef=""
          />
          <OverviewCard
            icon={<BsTwitter color="hsl(203, 89%, 53%)" fontSize={25} />}
            description="Retweets"
            quantity="303%"
            positive={true}
            value={"117"}
            socialRef=""
          />
          <OverviewCard
            icon={<BsTwitter color="hsl(203, 89%, 53%)" fontSize={25} />}
            description="Likes"
            quantity="553%"
            positive={true}
            value={"507"}
            socialRef=""
          />
          <OverviewCard
            icon={<AiFillYoutube color="hsl(348, 97%, 39%)" fontSize={25} />}
            description="Likes"
            quantity="19%"
            positive={false}
            value={"107"}
            socialRef=""
          />
          <OverviewCard
            icon={<AiFillYoutube color="hsl(348, 97%, 39%)" fontSize={25} />}
            description="Total Views"
            quantity="12%"
            positive={false}
            value={"1407"}
            socialRef=""
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
