import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import { getRandomPosition } from "../../utils";
import TexturedPlyModel from "../modelization/TexturedPlyModel";

type ModelizationDisplayProps = {
  modelization: Modelization;
};

const ModelizationDisplay = ({ modelization }: ModelizationDisplayProps) => {
  const modelRef = useRef<any>();
  const { viewport } = useThree();
  const position = useMemo(
    () => getRandomPosition(viewport.width, viewport.height),
    [viewport.height, viewport.width]
  );
  const { name, modelPath, texturePath } = modelization;
  return (
    <Suspense
      fallback={
        <mesh position={position}>
          <Html>
            <div
              onClick={() => console.log("hello")}
              style={{
                backgroundColor:
                  "#" + ((Math.random() * 0xffffff) << 0).toString(16),
              }}
              className="rounded-xl p-2 text-white font-bold text-center animate-pulse cursor-pointer"
            >
              <p>{name}</p>
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
      />
    </Suspense>
  );
};

export default ModelizationDisplay;
