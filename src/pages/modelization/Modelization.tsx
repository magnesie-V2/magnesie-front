import ModelizationDisplay from "../../components/modelization/ModelizationDisplay";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import useModelization from "../../hooks/modelization/useModelization";

const Modelization = () => {
  const { modelization, isLoading, isError, error, refetch } =
    useModelization();

  if (isLoading) {
    return <Spinner text="Chargement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox error={error as string} refetch={refetch} />;
  }

  // change styles (height rules)
  //https://osorina.github.io/3d-headphones/
  return (
    <div className="flex flex-col items-center h-5/6">
      <p className="text-3xl mt-8">{modelization?.name}</p>
      <ModelizationDisplay />
    </div>
  );
};

export default Modelization;
