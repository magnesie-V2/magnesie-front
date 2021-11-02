import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Modelization = () => (
  <div className="h-4/5">
    <div className="h-3/5 mx-auto">
      <Canvas orthographic camera={{ zoom: 75 }}>
        <mesh>
          <torusGeometry args={[1, 0.5, 32, 100]} />
          <meshNormalMaterial />
        </mesh>
        {/*// @ts-ignore */}
        <OrbitControls />
      </Canvas>
    </div>
  </div>
);

export default Modelization;
