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
      <p className="text-3xl mt-8">{name}</p>
      <div className="h-3/5 w-5/6 sm:w-3/4 xl:w-4/6 mt-8 rounded-xl bg-gray-200 relative">
        <Suspense fallback={<p>Loading ...</p>}>
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
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Modelization;
