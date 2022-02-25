import { Suspense } from "react";
import ConsumptionChart from "../../components/modelization/ConsumptionChart";
import DetailedModelizationControls from "../../components/modelization/DetailedModelizationControls";
import DetailedModelizationDisplay from "../../components/modelization/DetailedModelizationDisplay";
import ModelizationHeader from "../../components/modelization/ModelizationHeader";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import useModelization from "../../hooks/modelization/useModelization";
import usePower from "../../hooks/power/usePower";

const Modelization = () => {
  const {
    modelization,
    name,
    isLoading,
    isError,
    refetch,
    isAutoRotateOn,
    toggleAutoRotate,
    orbitRef,
    resetOrbitPosition,
    modelRef,
    exportModel,
    power,
  } = useModelization();
  const { timeValues, duration, consumptionValues, totalConsumption } =
    usePower(power || "");

  if (isLoading) {
    return <Spinner text="Chargement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox refetch={refetch} />;
  }

  const { modelPath, texturePath } = modelization as Modelization;
  return (
    <div className="flex flex-col items-center pb-2">
      <ModelizationHeader
        name={name || "Modélisation"}
        duration={duration}
        consumption={totalConsumption}
      />
      <div className="h-screen/2 w-5/6 sm:w-3/4 xl:w-4/6 mt-8 rounded-xl bg-gray-200 relative">
        <Suspense
          fallback={
            <div className="h-full flex justify-center items-center">
              <p className="animate-pulse text-3xl px-8 text-center">
                Chargement du modèle 3D
              </p>
            </div>
          }
        >
          <DetailedModelizationDisplay
            modelRef={modelRef}
            orbitRef={orbitRef}
            modelPath={modelPath}
            texturePath={texturePath}
            isAutoRotateOn={isAutoRotateOn}
          />
          <DetailedModelizationControls
            isAutoRotateOn={isAutoRotateOn}
            toggleAutoRotate={toggleAutoRotate}
            resetOrbitPosition={resetOrbitPosition}
            exportModel={exportModel}
          />
        </Suspense>
      </div>
      <div className="w-5/6 sm:w-3/4 xl:w-4/6 mt-8 p-1 rounded-xl bg-gray-200">
        <ConsumptionChart
          timeValues={timeValues}
          consumptionValues={consumptionValues}
        />
      </div>
    </div>
  );
};

export default Modelization;
