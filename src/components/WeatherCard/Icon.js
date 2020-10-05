import React from "react";

import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 38%;
  `;

  let icon = "";

  switch (props.condition) {
    case "Clouds":
      icon = `./img/w_icons/009-cloud.png`;
      break;
    case "Clear":
      icon = `./img/w_icons/012-sun.png`;
      break;
    case "Haze":
      icon = `./img/w_icons/007-cloudsandsun.png`;
      break;
    case "Hail":
      icon = `./img/w_icons/010-snow.png`;
      break;
    case "Fog":
      icon = `./img/w_icons/016-calendar.png`;
      break;
    case "Tornado":
      icon = `./img/w_icons/020-star.png`;
      break;
    case "Dust":
      icon = `./img/w_icons/015-sand storm.png`;
      break;
    case "Mist":
      icon = `./img/w_icons/023-cloud.png`;
      break;
    case "Snow":
      icon = `./img/w_icons/030-celsius.png`;
      break;
    case "Rain":
      icon = `./img/w_icons/027-umbrella.png`;
      break;
    case "Drizzle":
      icon = `./img/w_icons/035-umbrella.png`;
      break;
    case "Thunderstorm":
      icon = `./img/w_icons/015-sand storm.png`;
      break;
    default:
      icon = `./img/w_icons/001-thermometer.png`;
      break;
  }
  return <Icon className="icon" src={icon} alt="Weather Icon" />;
};

export default Icon;
