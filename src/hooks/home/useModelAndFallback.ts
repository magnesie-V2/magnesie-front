import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { NavigateFunction } from "react-router";
import { getRandomPosition } from "../../utils";

const useModelAndFallback = (
  modelization: Modelization,
  navigate: NavigateFunction
) => {
  const { viewport } = useThree();
  const { id } = modelization;
  const position = useMemo(
    () => getRandomPosition(viewport.width, viewport.height),
    [viewport.height, viewport.width]
  );
  const backgroundColor = useMemo(
    () => "#" + ((Math.random() * 0xffffff) << 0).toString(16),
    []
  );
  const handleClick = () => navigate(`/modelization/${id}`);
  return {
    position,
    backgroundColor,
    handleClick,
  };
};

export default useModelAndFallback;
