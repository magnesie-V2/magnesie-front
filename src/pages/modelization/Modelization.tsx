import { Suspense } from "react";
import ModelizationControls from "../../components/modelization/ModelizationControls";
import ModelizationDisplay from "../../components/modelization/ModelizationDisplay";
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
    horizontalHalfRotation,
  } = useModelization();

  if (isLoading) {
    return <Spinner text="Chargement de la modélisation..." />;
  }

  if (isError) {
    return <ErrorBox error={error as string} refetch={refetch} />;
  }

  const { name, modelPath, texturePath } = modelization as Modelization;
  return (
    <div className="flex flex-col items-center h-5/6">
      <p className="text-3xl mt-8 text-center px-4">{name}</p>
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
          <ModelizationDisplay
            modelRef={modelRef}
            orbitRef={orbitRef}
            modelPath={modelPath}
            texturePath={texturePath}
            isAutoRotateOn={isAutoRotateOn}
          />
          <ModelizationControls
            isAutoRotateOn={isAutoRotateOn}
            toggleAutoRotate={toggleAutoRotate}
            resetOrbitPosition={resetOrbitPosition}
            exportModel={exportModel}
            horizontalHalfRotation={horizontalHalfRotation}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Modelization;
