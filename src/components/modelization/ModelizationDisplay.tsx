import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TexturedPlyModel from "./TexturedPlyModel";

type ModelizationDisplayProps = {
  modelRef: any;
  orbitRef: any;
  modelPath: string;
  texturePath: string;
  isAutoRotateOn: boolean;
};

// customize loading message
// algo ratio zoom taille
// 360 rotation
const ModelizationDisplay = ({
  modelRef,
  orbitRef,
  modelPath,
  texturePath,
  isAutoRotateOn,
}: ModelizationDisplayProps) => (
  <Canvas orthographic camera={{ zoom: 250 }}>
    <ambientLight intensity={1} />
    <TexturedPlyModel
      modelRef={modelRef}
      modelPath={modelPath}
      texturePath={texturePath}
    />
    {/*// @ts-ignore */}
    <OrbitControls
      ref={orbitRef}
      minZoom={50}
      maxZoom={500}
      enablePan={false}
      autoRotate={isAutoRotateOn}
      autoRotateSpeed={4}
    />
  </Canvas>
);

export default ModelizationDisplay;
