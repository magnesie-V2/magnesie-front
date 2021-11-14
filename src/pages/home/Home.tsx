import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const ref = useRef<any>();
  useFrame(
    () =>
      (ref.current.rotation.x =
        ref.current.rotation.y =
        ref.current.rotation.z +=
          0.005)
  );
  return (
    <group ref={ref}>
      <mesh position={[-2, 0, 0]}>
        <dodecahedronBufferGeometry />
        <meshStandardMaterial roughness={0.75} emissive="#404057" />
      </mesh>
      <mesh position={[0, -2, -3]}>
        <torusKnotGeometry args={[1, 0.2, 32, 100]} />
        <meshStandardMaterial roughness={0.75} emissive="#404057" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.75} emissive="#404057" />
      </mesh>
    </group>
  );
};
//https://threejs.org/examples/webgl_interactive_cubes_ortho.html
//https://threejs.org/examples/webgl_interactive_cubes.html
const Home = () => (
  <Link to="/modelization/myModelization">
    <div className="h-4/5">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
        <pointLight color="indianred" />
        <pointLight position={[10, 10, -10]} color="orange" />
        <pointLight position={[-10, -10, 10]} color="lightblue" />
        <Content />
      </Canvas>
    </div>
  </Link>
);

export default Home;
