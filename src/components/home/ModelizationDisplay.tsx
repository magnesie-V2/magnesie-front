import { Html } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { getRandomPosition } from "../../utils";
import TexturedPlyModel from "../modelization/TexturedPlyModel";

type ModelizationDisplayProps = {
  modelPath: string;
  texturePath: string;
};

const ModelizationDisplay = ({
  modelPath,
  texturePath,
}: ModelizationDisplayProps) => {
  const modelRef = useRef<any>();
  const position = getRandomPosition();
  return (
    <Suspense
      fallback={
        <mesh position={position}>
          <Html
            style={{
              backgroundColor:
                "#" + ((Math.random() * 0xffffff) << 0).toString(16),
            }}
            className="rounded-xl p-2 text-white font-bold text-center animate-pulse"
          >
            Loading modelization...
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
