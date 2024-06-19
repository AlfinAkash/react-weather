import thunderImg from "../assets/images/thunder.png";
import drizzleImg from "../assets/images/drizzle.png";
import rainImg from "../assets/images/rain.png";
import snowImg from "../assets/images/snow.png";
import atmoshpereImg from "../assets/images/partial-cloud.png";
import cloudsImg from "../assets/images/clouds.png";
import sunImg from "../assets/images/sun.png";

const getWeatherImage = (weatherCode) => {
  if (weatherCode >= 200 && weatherCode <= 232) {
    return thunderImg;
  } else if (weatherCode >= 300 && weatherCode <= 321) {
    return drizzleImg;
  } else if (weatherCode >= 500 && weatherCode <= 531) {
    return rainImg;
  } else if (weatherCode >= 600 && weatherCode <= 622) {
    return snowImg;
  } else if (weatherCode >= 700 && weatherCode <= 781) {
    return atmoshpereImg;
  } else if (weatherCode >= 801 && weatherCode <= 804) {
    return cloudsImg;
  } else {
    return sunImg;
  }
};

export default getWeatherImage;
