import AboutGV from "./Components/GlobalVolunteer/AboutGV";
import "../../Assets/Scss/Globalvolunteer/ProductGv.scss";
import InfoGV from "./Components/GlobalVolunteer/InfoGV";
import ProcessGV from "./Components/GlobalVolunteer/ProcessGV";
import LiveExpGV from "./Components/GlobalVolunteer/LiveExpGV";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function ProductsGv(props) {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/gv",
      title: "Global Volunteer",
    });
    props.callBack();
  });
  return (
    <div className="AboutGV">
      <div className="backgroundImageGV">
        <AboutGV />
      </div>
      <InfoGV />
      <ProcessGV />
      <LiveExpGV />
    </div>
  );
}

export default ProductsGv;
