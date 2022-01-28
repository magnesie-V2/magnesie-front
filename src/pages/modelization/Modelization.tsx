import { Suspense } from "react";
import DetailedModelizationControls from "../../components/modelization/DetailedModelizationControls";
import DetailedModelizationDisplay from "../../components/modelization/DetailedModelizationDisplay";
import ModelizationHeader from "../../components/modelization/ModelizationHeader";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import useModelization from "../../hooks/modelization/useModelization";

const Modelization = () => {
  const {
    modelization,
    isLoading,
    isError,
    error,
    refetch,
    isAutoRotateOn,
    toggleAutoRotate,
    orbitRef,
    resetOrbitPosition,
    modelRef,
    exportModel,
  } = useModelization();

  if (isLoading) {
    return <Spinner text="Chargement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox error={error as string} refetch={refetch} />;
  }

  const { name, modelPath, texturePath, duration, consumption } =
    modelization as Modelization;
  return (
    <div className="flex flex-col items-center h-5/6">
      <ModelizationHeader
        name={name}
        duration={duration}
        consumption={consumption}
      />
      <div className="h-3/5 w-5/6 sm:w-3/4 xl:w-4/6 mt-8 rounded-xl bg-gray-200 relative">
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
    </div>
  );
};

export default Modelization;
