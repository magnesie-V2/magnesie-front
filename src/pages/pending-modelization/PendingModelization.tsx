import Terminal from "../../components/pending-modelization/Terminal";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import usePendingModelization from "../../hooks/pending-modelization/usePendingModelization";

const PendingModelization = () => {
  const { pendingModelization, isLoading, isError, error, refetch } =
    usePendingModelization();

  if (isLoading) {
    return <Spinner text="Chargement de l'avancement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox error={error as string} refetch={refetch} />;
  }

  const { name, logs } = pendingModelization as PendingModelization;
  return (
    <div className="flex flex-col items-center h-5/6">
      <p className="text-3xl mt-16 text-center px-4">{name}</p>
      <Terminal logs={logs} />
    </div>
  );
};

export default PendingModelization;
