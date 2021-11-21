import { Html, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import TexturedPlyModel from "./TexturedPlyModel";

type ModelizationDisplayProps = {
  modelPath: string;
  texturePath: string;
  isAutoRotateOn: boolean;
};

// customize loading message
// algo ratio zoom taille
const ModelizationDisplay = ({
  modelPath,
  texturePath,
  isAutoRotateOn,
}: ModelizationDisplayProps) => (
  <Canvas orthographic camera={{ zoom: 250 }}>
    <ambientLight intensity={1} />
    <Suspense fallback={<Html center>Loading ...</Html>}>
      <TexturedPlyModel modelPath={modelPath} texturePath={texturePath} />
    </Suspense>
    {/*// @ts-ignore */}
    <OrbitControls
      minZoom={50}
      maxZoom={500}
      enablePan={false}
      autoRotate={isAutoRotateOn}
      autoRotateSpeed={4}
    />
  </Canvas>
);

export default ModelizationDisplay;
