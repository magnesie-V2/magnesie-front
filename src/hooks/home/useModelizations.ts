import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { getRandomPosition } from "../../utils";

const useModelizations = (objects: JSX.Element[]) => {
  const groupRef = useRef<any>();
  const { viewport } = useThree();
  const fillerObjects = useMemo(
    () =>
      Array.from({ length: Math.ceil(window.innerWidth / 400) }, () => objects)
        .flat()
        .map((object) => {
          return {
            object,
            position: getRandomPosition(viewport.width, viewport.height),
            color: Math.random() * 0xffffff,
          };
        }),
    [objects, viewport.height, viewport.width]
  );
  useFrame(
    () =>
      (groupRef.current.rotation.x =
        groupRef.current.rotation.y =
        groupRef.current.rotation.z +=
          0.001)
  );
  return { groupRef, fillerObjects };
};

export default useModelizations;
