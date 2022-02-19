import { Html } from "@react-three/drei";
import { Suspense } from "react";
import { NavigateFunction } from "react-router";
import useModelAndFallback from "../../hooks/home/useModelAndFallback";
import TexturedPlyModel from "../modelization/TexturedPlyModel";

type ModelizationDisplayProps = {
  modelization: Modelization;
  navigate: NavigateFunction;
};

const ModelizationDisplay = ({
  modelization,
  navigate,
}: ModelizationDisplayProps) => {
  const {
    modelRef,
    modelPath,
    texturePath,
    position,
    backgroundColor,
    handleClick,
  } = useModelAndFallback(modelization, navigate);
  return (
    <Suspense
      fallback={
        <mesh position={position}>
          <Html>
            <div
              onClick={handleClick}
              style={{
                backgroundColor,
              }}
              className="rounded-xl p-2 text-white font-bold text-center animate-pulse cursor-pointer"
            >
              <p>{modelization.name}</p>
              <p>Loading...</p>
            </div>
          </Html>
        </mesh>
      }
    >
      <TexturedPlyModel
        modelPath={modelPath}
        texturePath={texturePath}
        modelRef={modelRef}
        position={position}
        handleClick={handleClick}
      />
    </Suspense>
  );
};

export default ModelizationDisplay;
