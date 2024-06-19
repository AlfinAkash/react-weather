import { useEffect, useState } from "react";

import "./index.css";

function getLocalDateTime(timezoneOffset) {
  // Get the current UTC time in milliseconds
  const currentUTCTime = Date.now();

  // Calculate the local time in milliseconds
  const localTime = currentUTCTime + timezoneOffset * 1000;

  // Create a Date object for the local time
  const localDate = new Date(localTime);

  // Helper function to pad single digits with leading zero
  function pad(number) {
    return number < 10 ? "0" + number : number;
  }

  // Format the date as DD/MM/YYYY
  const formattedDate =
    pad(localDate.getUTCDate()) +
    "/" +
    pad(localDate.getUTCMonth() + 1) +
    "/" +
    localDate.getUTCFullYear();

  // Format the time as HH:MM AM/PM
  let hours = localDate.getUTCHours();
  const minutes = pad(localDate.getUTCMinutes());
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedTime = pad(hours) + ":" + minutes + " " + ampm;

  return {
    date: formattedDate,
    time: formattedTime,
  };
}

const DateTime = (props) => {
  const { timezone } = props;

  const [localDateTime, setLocalDateTime] = useState(
    getLocalDateTime(timezone)
  );

  useEffect(() => {
    const updateLocalDateTime = () => {
      setLocalDateTime(getLocalDateTime(timezone));
    };

    updateLocalDateTime();

    const interval = setInterval(updateLocalDateTime, 60000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="date-container">
      <p className="date-text">{localDateTime.date}</p>
      <p className="time-text">{localDateTime.time}</p>
    </div>
  );
};

export default DateTime;
