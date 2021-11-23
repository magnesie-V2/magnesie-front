import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
// @ts-ignore
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

type TexturedPlyModelProps = {
  modelRef: any;
  modelPath: string;
  texturePath: string;
};

const TexturedPlyModel = ({
  modelRef,
  modelPath,
  texturePath,
}: TexturedPlyModelProps) => {
  const ply = useLoader(PLYLoader, modelPath);
  const texture = useTexture(texturePath);
  return (
    <mesh ref={modelRef} geometry={ply}>
      <meshStandardMaterial map={texture} flatShading />
    </mesh>
  );
};

export default TexturedPlyModel;
