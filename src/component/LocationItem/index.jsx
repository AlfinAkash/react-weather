import { FaLocationDot } from "react-icons/fa6";

import "./index.css";

const LocationItem = (props) => {
  const { locationName } = props;

  return (
    <div className="location-container">
      <FaLocationDot className="location-icon" />
      <p className="location-text">{locationName}</p>
    </div>
  );
};

export default LocationItem;
