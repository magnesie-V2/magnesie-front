import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
// @ts-ignore
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

type TexturedPlyModelProps = {
  modelPath: string;
  texturePath: string;
};

const TexturedPlyModel = ({
  modelPath,
  texturePath,
}: TexturedPlyModelProps) => {
  const ply = useLoader(PLYLoader, modelPath);
  const texture = useTexture(texturePath);
  return (
    <mesh geometry={ply}>
      <meshStandardMaterial map={texture} flatShading />
    </mesh>
  );
};

export default TexturedPlyModel;
