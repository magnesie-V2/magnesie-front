import { useQuery } from "react-query";
import { getFutureWeather } from "../../services";

const useFutureWeather = () => {
  const {
    data: weather,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("weather", getFutureWeather);
  const isWeatherGood: boolean = weather?.data.hourly
    .slice(0, 3)
    .map(
      (prevision: any) =>
        prevision.weather[0].icon === "01d" ||
        prevision.weather[0].icon === "02d"
    )
    .every(Boolean);
  return { isWeatherGood, isLoading, isError, error, refetch };
};

export default useFutureWeather;
