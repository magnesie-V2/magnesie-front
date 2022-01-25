import useModelizations from "../../hooks/home/useModelizations";
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
  const { groupRef, fillerObjects } = useModelizations(OBJECTS);
  return (
    <group ref={groupRef}>
      {fillerObjects.map((fillerObject, index) => (
        <mesh key={index} position={fillerObject.position}>
          {fillerObject.object}
          <meshStandardMaterial
            roughness={0.5}
            emissive="#404057"
            color={fillerObject.color}
          />
        </mesh>
      ))}
      {modelizations.map((modelization, index) => (
        <ModelizationDisplay key={index} modelization={modelization} />
      ))}
    </group>
  );
};

export default ModelizationsDiplay;
