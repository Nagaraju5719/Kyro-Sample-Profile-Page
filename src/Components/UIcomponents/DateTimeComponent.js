import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DateTimeComponent() {
  let greet = "";
  const dateTime = new Date();
  const year = dateTime.getFullYear();
  const month = months[dateTime.getMonth()];
  const date = dateTime.getDate();

  if (dateTime.getHours() < 12) {
    greet = "Good Morning";
  } else if (dateTime.getHours() > 12 && dateTime.getHours() < 18) {
    greet = "Good Afternoon";
  } else {
    greet = "Good Evening";
  }

  const currentDandTime = `${date} ${month} ${year}`;
  return { currentDandTime, greet };
}

export default DateTimeComponent;
