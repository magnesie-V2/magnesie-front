import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Dodecahedron = ({ position }: { position: number[] }) => (
  <mesh position={position}>
    <dodecahedronBufferGeometry />
    <meshStandardMaterial roughness={0.75} emissive="#404057" />
  </mesh>
);

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
      <Dodecahedron position={[-2, 0, 0]} />
      <Dodecahedron position={[0, -2, -3]} />
      <Dodecahedron position={[2, 0, 0]} />
    </group>
  );
};

const Home = () => (
  <Link to="/modelization/myModelization">
    <div className="h-screen">
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
