import { Html } from "@react-three/drei";
import { NavigateFunction } from "react-router";
import useModelAndFallback from "../../hooks/home/useModelAndFallback";

type ModelizationDisplayProps = {
  modelization: Modelization;
  navigate: NavigateFunction;
};

const ModelizationDisplay = ({
  modelization,
  navigate,
}: ModelizationDisplayProps) => {
  const { backgroundColor, position, handleClick } = useModelAndFallback(
    modelization,
    navigate
  );
  return (
    <Html position={position}>
      <div
        onClick={handleClick}
        style={{
          backgroundColor,
        }}
        className="rounded-xl text-lg p-5 text-white font-bold text-center cursor-pointer"
      >
        <p>{modelization.name}</p>
      </div>
    </Html>
  );
};

export default ModelizationDisplay;
