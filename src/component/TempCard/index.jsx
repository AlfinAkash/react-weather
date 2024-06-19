import realFeelHot from "../../assets/images/real-feel-hot.png";
import realFeelCold from "../../assets/images/real-feel-cold.png";
import windSpeed from "../../assets/images/wind-speed.png";
import humidity from "../../assets/images/humidity.png";

import TempCardItem from "../TempCardItem";

import "./index.css";

const TempCard = (props) => {
  const { otherDetails, apiStatus } = props;
  const { feelsLikeTemperature, windSpeedValue, humidityValue } = otherDetails;

  return (
    <div className="temp-card-container">
      <TempCardItem
        mainText="Feels Like"
        imageUrl={feelsLikeTemperature > 15 ? realFeelHot : realFeelCold}
        apiStatus={apiStatus}
      >
        <p className="temp-card-value">
          {feelsLikeTemperature}
          <span className="degree-small"> °</span>
        </p>
      </TempCardItem>
      <TempCardItem
        mainText="Wind Speed"
        imageUrl={windSpeed}
        apiStatus={apiStatus}
      >
        <p className="temp-card-value">
          {windSpeedValue}
          <span className="meter-per-sec"> m/s</span>
        </p>
      </TempCardItem>
      <TempCardItem
        mainText="Humidity"
        imageUrl={humidity}
        apiStatus={apiStatus}
      >
        <p className="temp-card-value">
          {humidityValue}
          <span className="degree-small"> %</span>
        </p>
      </TempCardItem>
    </div>
  );
};

export default TempCard;
