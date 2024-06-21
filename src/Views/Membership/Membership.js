import AboutMbr from "./Components/AboutMbr";
import AiesecValues from "./Components/AiesecValues";
import InfoAiesec from "./Components/InfoAiesec";
import ProcessAiesec from "./Components/ProcessAiesec";
import "../../Assets/Scss/Membership/AboutMbr.scss";
import Questions from "./Components/Questions";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Membership(props) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/membership",
      title: "Membership",
    });
    props.callBack();
  });
  return (
    <div className="AboutMbr">
      <div className="backgroundImageMbr">
        <AboutMbr />
      </div>
      <InfoAiesec />
      <ProcessAiesec />
      <AiesecValues />
      <Questions />
    </div>
  );
}

export default Membership;
