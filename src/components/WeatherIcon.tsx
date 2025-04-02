import { JSX } from "react";

import {
  WiDayRain,
  WiRain,
  WiThunderstorm,
  WiDaySunny,
  WiCloud,
  WiCloudy,
} from "react-icons/wi";

import { ICON_TYPE } from "../utilitites/constants";

const iconMap: { [key: string]: JSX.Element } = {
  [ICON_TYPE.LIGHT_RAIN]: <WiDayRain />,
  [ICON_TYPE.MODERATE_RAIN]: <WiRain />,
  [ICON_TYPE.HEAVY_RAIN]: <WiThunderstorm />,
  [ICON_TYPE.LIGHT_CLOUD]: <WiDaySunny />,
  [ICON_TYPE.MODERATE_CLOUD]: <WiCloud />,
  [ICON_TYPE.HEAVY_CLOUD]: <WiCloudy />,
};

function WeatherIcon({ iconType }: WeatherInfo["iconType"]) {
  const className = "w-full my-5 text-[5rem]";
  const IconComponent = iconMap[iconType] || null;

  return <div className={className}>{IconComponent}</div>;
}

export default WeatherIcon;
