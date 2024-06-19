import getWeatherImage from "../../custom/getWeatherImage";
import apiStatusConstants from "../../custom/apiStatusConstants";
import Loader from "../Loader";
import notFoundImg from "../../assets/images/not-found.png";

import "./index.css";

const MainTemperature = (props) => {
  const { weatherData, apiStatus } = props;

  function capitalizeFLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const renderMainTemperature = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <Loader />;
      case apiStatusConstants.success:
        const {
          weatherCode,
          weatherTemperature,
          weatherHeading,
          weatherDescription,
        } = weatherData;

        return (
          <>
            <div className="main-temp-content">
              <h1 className="main-temp">
                {weatherTemperature}
                <span className="degree">°</span>
              </h1>

              <div className="main-temp-type">
                <p className="main-temp-type-text">{weatherHeading}</p>
                <p className="main-temp-type-desc">
                  {capitalizeFLetter(weatherDescription)}
                </p>
              </div>
            </div>

            <img
              src={getWeatherImage(weatherCode)}
              className="weather-img"
              alt="weather icon"
            />
          </>
        );
      case apiStatusConstants.failure:
        return <h1>Failed to get report!</h1>;
      case apiStatusConstants.noData:
        return (
          <div className="not-found-container">
            <img className="not-found-img" src={notFoundImg} alt="not found" />
            <h1 className="not-found-text">
              Requested city not found in this country!
            </h1>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="main-temp-container">{renderMainTemperature()}</div>;
};

export default MainTemperature;





