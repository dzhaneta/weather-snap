import { ICON_TYPE } from "../constants";

/* rain:
  0 - 2.5 -> light
  2.5 - 7.6 -> moderate
  > 7.6 -> heavy
  
  cloud:
  0 - 30 -> light
  30 - 50 -> moderate
  > 50 -> heavy
*/

export const getWeatherIcon = (cloud: number, rain: number) => {
  let iconType = "";

  iconType =
    cloud > 50
      ? ICON_TYPE.HEAVY_CLOUD
      : cloud > 30
      ? ICON_TYPE.MODERATE_CLOUD
      : ICON_TYPE.LIGHT_CLOUD;
  iconType =
    rain > 7.6
      ? ICON_TYPE.HEAVY_RAIN
      : rain > 2.5
      ? ICON_TYPE.MODERATE_RAIN
      : rain > 1
      ? ICON_TYPE.LIGHT_RAIN
      : iconType;

  return iconType;
};
