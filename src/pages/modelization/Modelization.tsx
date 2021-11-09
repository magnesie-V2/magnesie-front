import Donuts from "../../components/modelization/Donuts";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import useModelization from "../../hooks/modelization/useModelization";

const Modelization = () => {
  const { isLoading, isError, error, refetch } = useModelization();

  if (isLoading) {
    return <Spinner text="Chargement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox error={error as string} refetch={refetch} />;
  }

  // change styles (height rules)
  return (
    <div className="flex flex-col items-center h-5/6">
      <p className="text-3xl mt-12">Nom de la modélisation</p>
      <div className="h-3/5 mt-16">
        <Donuts />
      </div>
    </div>
  );
};

export default Modelization;
