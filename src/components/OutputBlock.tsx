import { useSelector } from "react-redux";

import { RootState } from "../store/store";

import WeatherIcon from "./WeatherIcon";

const OutputBlock = () => {
  const data = useSelector((state: RootState) => state.weather.entities);

  return (
    <div className="grid grid-cols-5 gap-5">
      {data?.map((item) => {
        return (
          <div
            className="px-5 py-2 text-center bg-white/50 rounded-lg shadow-xl"
            key={item.id}
          >
            <WeatherIcon iconType={item.iconType} />
            <p className="p-5 pt-0 text-xl">{item.temp}&#186;C</p>
            <hr className="border-purple-950" />
            <p className="p-5 text-base">{item.time}</p>
          </div>
        );
      })}
    </div>
  )
}

export default OutputBlock;