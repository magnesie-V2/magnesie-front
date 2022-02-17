import NewModelizationForm from "../../components/new-modelization/NewModelizationForm";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import useFutureWeather from "../../hooks/new-modelization/useFutureWeather";

const NewModelization = () => {
  const { isWeatherGood, isLoading, isError, refetch } = useFutureWeather();

  if (isLoading) {
    return <Spinner text="Chargement des données météo..." />;
  }

  if (isError) {
    return <ErrorBox refetch={refetch} />;
  }

  return <NewModelizationForm isWeatherGood={isWeatherGood} />;
};

export default NewModelization;
