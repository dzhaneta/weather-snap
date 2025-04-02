import { useRef } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../store/store";
import { getWeather } from "../store/weatherSlice";

const InputBlock = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch: AppDispatch = useDispatch();

  const clickHandler = () => dispatch(getWeather(inputRef.current!.value));

  const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      clickHandler();
      inputRef.current?.focus();
    }
  };

  dispatch(getWeather("Moscow"));

  return (
    <div
      className="p-5 flex justify-around bg-white/50 rounded-lg shadow-lg"
      onKeyDownCapture={keyHandler}
    >
      <input
        className="w-3/4 px-5 py-2 capitalize outline-none text-3xl bg-white/50 rounded-lg"
        ref={inputRef}
        placeholder="City Name"
        defaultValue="Moscow"
        autoFocus
      />
      <button
        className="px-5 py-2 text-xl bg-white/50 rounded-lg"
        onClick={clickHandler}
      >
        Search
      </button>
    </div>
  );
};

export default InputBlock;
