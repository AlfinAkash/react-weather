import { useEffect, useState } from "react";

import apiStatusConstants from "../../custom/apiStatusConstants";
import getWeatherImage from "../../custom/getWeatherImage";
import Loader from "../Loader";

import "./index.css";

const OtherLargeCitiesItem = (props) => {
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);
  const [weatherData, setWeatherData] = useState({});
  const { cityName } = props;

  useEffect(() => {
    (async () => {
      setApiStatus(apiStatusConstants.inProgress);

      const apiKey = import.meta.env.VITE_API_KEY;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},IN&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (parseInt(data.cod) === 200) {
          const formattedData = {
            weatherCode: data.weather[0].id,
            weatherTemperature: data.main.temp,
          };

          setApiStatus(apiStatusConstants.success);
          setWeatherData(formattedData);
        } else if (parseInt(data.cod) === 404) {
          setApiStatus(apiStatusConstants.noData);
        } else if (parseInt(data.cod) === 401) {
          setApiStatus(apiStatusConstants.failure);
        }
      } catch (e) {
        setApiStatus(apiStatusConstants.failure);
        console.log("Error", e);
      }
    })();
  }, []);

  const renderCityItem = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <Loader />;
      case apiStatusConstants.success:
        return (
          <>
            <img
              className="other-city-img"
              src={getWeatherImage(weatherData.weatherCode)}
              alt="weather image"
            />
            <h1 className="other-city-value">
              {Math.round(weatherData.weatherTemperature)}
              <span className="degree-small">°</span>
            </h1>
            <h1 className="other-city-name">{cityName}</h1>
          </>
        );
      case apiStatusConstants.failure:
        return <h1 className="error-msg">Failed to get data!</h1>;
      case apiStatusConstants.noData:
        return <h1 className="error-msg">No city found!</h1>;
      default:
        return null;
    }
  };

  return <li className="other-city-item">{renderCityItem()}</li>;
};

export default OtherLargeCitiesItem;
