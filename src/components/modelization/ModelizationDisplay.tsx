import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

type ModelizationDisplayProps = {
  isAutoRotateOn: boolean;
};

const ModelizationDisplay = ({ isAutoRotateOn }: ModelizationDisplayProps) => (
  <Canvas orthographic camera={{ zoom: 75 }}>
    <mesh>
      <torusGeometry args={[1, 0.5, 32, 100]} />
      <meshNormalMaterial />
    </mesh>
    {/*// @ts-ignore */}
    <OrbitControls
      minZoom={50}
      maxZoom={500}
      autoRotate={isAutoRotateOn}
      autoRotateSpeed={4}
    />
  </Canvas>
);

export default ModelizationDisplay;
