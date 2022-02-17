import ConsumptionChart from "../../components/modelization/ConsumptionChart";
import Terminal from "../../components/pending-modelization/Terminal";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import usePendingModelization from "../../hooks/pending-modelization/usePendingModelization";
import usePower from "../../hooks/power/usePower";

const PendingModelization = () => {
  const { pendingModelization, isLoading, isError, refetch, getStatusText } =
    usePendingModelization();
  const { timeValues, consumptionValues } = usePower(
    pendingModelization ? pendingModelization.power : ""
  );

  if (isLoading) {
    return <Spinner text="Chargement de l'avancement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox refetch={refetch} />;
  }

  const { name, status, logs } = pendingModelization as PendingModelization;
  return (
    <div className="flex flex-col items-center h-5/6 pb-2 h-fit">
      <p className="text-3xl mt-8 text-center px-4">
        {name} : {getStatusText(status)}
      </p>
      <Terminal logs={logs} />
      <div className="w-5/6 sm:w-3/4 xl:w-4/6 mt-8 p-1 rounded-xl bg-gray-200">
        <ConsumptionChart
          timeValues={timeValues}
          consumptionValues={consumptionValues}
        />
      </div>
    </div>
  );
};

export default PendingModelization;
