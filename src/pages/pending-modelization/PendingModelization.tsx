import { Progress } from "antd";
import ConsumptionChart from "../../components/modelization/ConsumptionChart";
import ModelizationControl from "../../components/pending-modelization/ModelizationControl";
import Terminal from "../../components/pending-modelization/Terminal";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import usePendingModelization from "../../hooks/pending-modelization/usePendingModelization";
import usePower from "../../hooks/power/usePower";

const PendingModelization = () => {
  const {
    id,
    pendingModelization,
    isLoading,
    isError,
    refetch,
    getStatusText,
    getProgressStatus,
  } = usePendingModelization();
  const { timeValues, consumptionValues } = usePower(
    pendingModelization?.power || ""
  );

  if (isLoading) {
    return <Spinner text="Chargement de l'avancement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox refetch={refetch} />;
  }

  const { name, status, logs, step } =
    pendingModelization as PendingModelization;
  return (
    <div className="flex flex-col items-center h-5/6 pb-2 h-fit">
      <div className="flex flex-row mt-8 items-center">
        <p className="text-3xl px-4">
          {name} : {getStatusText(status)}
        </p>
        <ModelizationControl id={id || ""} status={status} />
      </div>
      <Progress
        className="mt-8 w-2/3 lg:w-1/3"
        strokeColor={{
          from: "deepskyblue",
          to: "limegreen",
        }}
        percent={
          status === "Finished" ? 100 : Math.ceil((Number(step) / 18) * 100)
        }
        status={getProgressStatus(status)}
      />
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
