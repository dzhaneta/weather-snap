import { useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";
import { RootState } from "../store/store";

function LoadingStatus() {

  const isLoading = useSelector((state: RootState) => state.weather.isLoading);
  const error = useSelector((state: RootState) => state.weather.error);

  return (
    <>
      {isLoading && <AiOutlineLoading className="h-60 my-10 py-10 w-full animate-spin" />}
      {error && 
        <div className="h-60 my-10 flex place-items-center">
          <p className="w-full py-5 text-lg text-center text-white bg-red-500/50 rounded-lg shadow-lg">{error}</p>
        </div>
      }
    </>
  )
}

export default LoadingStatus;