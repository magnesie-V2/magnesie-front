import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Donuts = () => (
  <Canvas orthographic camera={{ zoom: 75 }}>
    <mesh>
      <torusGeometry args={[1, 0.5, 32, 100]} />
      <meshNormalMaterial />
    </mesh>
    {/*// @ts-ignore */}
    <OrbitControls />
  </Canvas>
);

export default Donuts;
