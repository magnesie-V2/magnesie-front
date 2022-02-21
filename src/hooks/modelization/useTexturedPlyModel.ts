import { useTexture } from "@react-three/drei";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useRef } from "react";
// @ts-ignore
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

const RESULTS_ENDPOINT = "http://localhost:7881/files/results/";

const useTexturedPlyModel = (
  modelRef: any,
  modelPath: string,
  texturePath: string
) => {
  const {
    size: { width, height },
  } = useThree();
  const ply = useLoader(PLYLoader, RESULTS_ENDPOINT + modelPath);
  const texture = useTexture(RESULTS_ENDPOINT + texturePath);
  const hasBeenInitialized = useRef<boolean>(false);
  const radius = modelRef.current?.geometry.boundingSphere.radius;
  useFrame((state) => {
    if (modelRef.current && !hasBeenInitialized.current) {
      const zoom = Math.min(width / (radius * 2), height / (radius * 2));
      state.camera.zoom = zoom;
      modelRef.current.rotation.x += Math.PI;
      hasBeenInitialized.current = true;
      state.camera.updateProjectionMatrix();
    }
  });
  return { ply, texture };
};

export default useTexturedPlyModel;
