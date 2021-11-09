import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const ModelizationDisplay = () => (
  <div className="h-3/5 w-3/4 xl:w-4/6 mt-8 rounded-xl bg-gray-200 relative">
    <Canvas orthographic camera={{ zoom: 75 }}>
      <mesh>
        <torusGeometry args={[1, 0.5, 32, 100]} />
        <meshNormalMaterial />
      </mesh>
      {/*// @ts-ignore */}
      <OrbitControls minZoom={50} maxZoom={500} />
    </Canvas>
    <div className="flex absolute bottom-0 right-0">
      <button className="flex items-center justify-center bg-white rounded-full w-8 h-8 m-2">
        A
      </button>
      <button className="flex items-center justify-center bg-white rounded-full w-8 h-8 m-2">
        B
      </button>
      <button className="flex items-center justify-center bg-white rounded-full w-8 h-8 m-2">
        C
      </button>
      <button className="flex items-center justify-center bg-white rounded-full w-8 h-8 m-2">
        D
      </button>
    </div>
  </div>
);

export default ModelizationDisplay;
