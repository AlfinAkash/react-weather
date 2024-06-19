import { useEffect, useState } from "react";

import NavBar from "../NavBar";
import MainTemperature from "../MainTemperature";
import TempCard from "../TempCard";
import OtherLargeCities from "../OtherLargeCities";
import apiStatusConstants from "../../custom/apiStatusConstants";

import "./index.css";

const Home = () => {
  const [weatherData, setWeatherData] = useState({
    weather: {
      weatherCode: "",
      weatherTemperature: "",
      weatherHeading: "",
      weatherDescription: "",
    },
    otherDetails: {
      feelsLikeTemperature: "",
      windSpeedValue: "",
      humidityValue: "",
    },
    cityName: "Kayathar",
    timezone: 19800,
  });
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.inProgress);

  const initiateSearch = async (searchInput, countryCode) => {
    setApiStatus(apiStatusConstants.inProgress);

    let apiUrl = "";
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!isNaN(parseInt(searchInput))) {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${searchInput},${countryCode}&appid=${apiKey}&units=metric`;
    } else {
      apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput},${countryCode}&appid=${apiKey}&units=metric`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (parseInt(data.cod) === 200) {
        const formattedData = {
          weather: {
            weatherCode: data.weather[0].id,
            weatherTemperature: data.main.temp,
            weatherHeading: data.weather[0].main,
            weatherDescription: data.weather[0].description,
          },
          otherDetails: {
            feelsLikeTemperature: data.main.feels_like,
            windSpeedValue: data.wind.speed,
            humidityValue: data.main.humidity,
          },
          cityName: data.name,
          timezone: data.timezone,
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
  };

  useEffect(() => {
    initiateSearch(weatherData.cityName, "IN");
  }, []);

  return (
    <div className="main-container">
      <NavBar
        locationName={weatherData.cityName}
        timezone={weatherData.timezone}
        handleSearchSubmit={initiateSearch}
      />
      <div className="inner-main-container">
        <div className="section-one">
          <div className="section-one-left">
            <MainTemperature
              weatherData={weatherData.weather}
              apiStatus={apiStatus}
            />
          </div>
          <div className="section-one-right">
            <TempCard
              otherDetails={weatherData.otherDetails}
              apiStatus={apiStatus}
            />
          </div>
        </div>

        <div className="section-two">
          <OtherLargeCities />
        </div>
      </div>
    </div>
  );
};

export default Home;
