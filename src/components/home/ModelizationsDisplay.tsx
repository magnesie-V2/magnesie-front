import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { getRandomPosition } from "../../utils";
import ModelizationDisplay from "./ModelizationDisplay";

type ModelizationsDisplayProps = {
  modelizations: Modelization[];
};

const OBJECTS = [
  <sphereBufferGeometry />,
  <tetrahedronBufferGeometry />,
  <dodecahedronBufferGeometry />,
  <coneBufferGeometry args={[0.5, 2, 64]} />,
  <torusGeometry args={[0.5, 0.1, 300, 100]} />,
  <torusKnotGeometry args={[0.5, 0.1, 300, 100]} />,
  <boxGeometry args={[1, 1, 1]} />,
];

const ModelizationsDiplay = ({ modelizations }: ModelizationsDisplayProps) => {
  const groupRef = useRef<any>();
  useFrame(
    () =>
      (groupRef.current.rotation.x =
        groupRef.current.rotation.y =
        groupRef.current.rotation.z +=
          0.001)
  );
  const fillerObjects = Array.from({ length: 4 }, () => OBJECTS).flat();
  return (
    <group ref={groupRef}>
      {fillerObjects.map((fillerObject, index) => (
        <mesh key={index} position={getRandomPosition()}>
          {fillerObject}
          <meshStandardMaterial
            roughness={0.5}
            color={Math.random() * 0xffffff}
            emissive="#404057"
          />
        </mesh>
      ))}
      {modelizations.map((modelization, index) => (
        <ModelizationDisplay
          key={index}
          modelPath={modelization.modelPath}
          texturePath={modelization.texturePath}
        />
      ))}
    </group>
  );
};

export default ModelizationsDiplay;
