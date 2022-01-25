import { Vector3 } from "@react-three/fiber";
import useTexturedPlyModel from "../../hooks/modelization/useTexturedPlyModel";

type TexturedPlyModelProps = {
  modelRef: any;
  modelPath: string;
  texturePath: string;
  scaleToScreen?: boolean;
  position?: Vector3;
  handleClick?: () => void;
};

const TexturedPlyModel = ({
  modelRef,
  modelPath,
  texturePath,
  scaleToScreen,
  position,
  handleClick,
}: TexturedPlyModelProps) => {
  const { ply, texture, radius } = useTexturedPlyModel(
    modelRef,
    modelPath,
    texturePath,
    scaleToScreen
  );
  return (
    <mesh
      ref={modelRef}
      geometry={ply}
      scale={
        scaleToScreen ? [1, 1, 1] : [1.5 / radius, 1.5 / radius, 1.5 / radius]
      }
      position={position || [0, 0, 0]}
      onClick={handleClick}
    >
      <meshStandardMaterial map={texture} flatShading />
    </mesh>
  );
};

export default TexturedPlyModel;
