import {
  OrbitControls,
  OrthographicCamera,
  useCamera,
} from "@react-three/drei";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
//@ts-ignore
import { Matrix4, Scene } from "three";

const Viewcube = () => {
  const { gl, scene, camera, size } = useThree();
  const virtualScene = useMemo(() => new Scene(), []);
  const virtualCam = useRef();
  const ref = useRef<any>();
  const [hover, set] = useState<any>(null);
  const matrix = new Matrix4();

  useFrame(() => {
    matrix.copy(camera.matrix).invert();
    ref.current.quaternion.setFromRotationMatrix(matrix);
    gl.autoClear = true;
    gl.render(scene, camera);
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(virtualScene, virtualCam.current);
  }, 1);

  return createPortal(
    <>
      {/*// @ts-ignore */}
      <OrthographicCamera
        ref={virtualCam}
        makeDefault={false}
        position={[0, 0, 100]}
      />
      <mesh
        ref={ref}
        raycast={useCamera(virtualCam)}
        position={[size.width / 2 - 80, size.height / 2 - 80, 0]}
        onPointerOut={(e) => set(null)}
        onPointerMove={(e: any) => set(Math.floor(e.faceIndex / 2))}
      >
        {[...Array(6)].map((_, index) => (
          <meshLambertMaterial
            attachArray="material"
            key={index}
            color={hover === index ? "hotpink" : "white"}
          />
        ))}
        <boxGeometry args={[60, 60, 60]} />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
    </>,
    virtualScene
  );
};

const Modelization = () => (
  <div className="h-screen">
    <Canvas>
      <mesh>
        <torusGeometry args={[1, 0.5, 32, 100]} />
        <meshNormalMaterial />
      </mesh>
      {/*// @ts-ignore */}
      <OrbitControls />
      {/*// @ts-ignore */}
      <Viewcube />
    </Canvas>
  </div>
);

export default Modelization;
