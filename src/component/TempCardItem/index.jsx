import { useContext } from "react";

import apiStatusConstants from "../../custom/apiStatusConstants";
import ThemeContext from "../../context/ThemeContext";
import Loader from "../Loader";

import "./index.css";

const TempCardItem = (props) => {
  const { theme } = useContext(ThemeContext);
  const { mainText, imageUrl, apiStatus, children } = props;

  const renderCardView = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <Loader />;
      case apiStatusConstants.success:
        return (
          <>
            <h1 className="temp-card-text">{mainText}</h1>
            <img className="temp-card-img" src={imageUrl} alt={mainText} />
            {children}
          </>
        );
      case apiStatusConstants.failure:
        return <h1 className="error-msg">Failed to get report!</h1>;
      case apiStatusConstants.noData:
        return <h1 className="error-msg">No city found!</h1>;
      default:
        return null;
    }
  };

  return (
    <div className={`temp-card-item temp-card-item-${theme}`}>
      {renderCardView()}
    </div>
  );
};

export default TempCardItem;
