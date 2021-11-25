import useTexturedPlyModel from "../../hooks/modelization/useTexturedPlyModel";

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
  const { ply, texture } = useTexturedPlyModel(
    modelRef,
    modelPath,
    texturePath
  );
  return (
    <mesh ref={modelRef} geometry={ply}>
      <meshStandardMaterial map={texture} flatShading />
    </mesh>
  );
};

export default TexturedPlyModel;
