import AboutGTe from "./Components/GlobalTeacher/AboutGte";
import "../../Assets/Scss/GlobalTeacher/ProductGTe.scss";
import InfoGTe from "./Components/GlobalTeacher/InfoGTe";
import ProcessGTe from "./Components/GlobalTeacher/ProcessGTe";
import LiveExpGTe from "./Components/GlobalTeacher/LiveExpGTe";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function ProductsGTe(props) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/gte",
      title: "Global Teacher",
    });
    props.callBack();
  });
  return (
    <div className="AboutGTe">
      <div className="backgroundImageGTe">
        <AboutGTe />
      </div>
      <InfoGTe />
      <ProcessGTe />
      <LiveExpGTe />
    </div>
  );
}

export default ProductsGTe;
