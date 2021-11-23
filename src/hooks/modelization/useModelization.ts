import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// @ts-ignore
import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter.js";
import { getModelization } from "../../services/services";

const useModelization = () => {
  const { id } = useParams();
  const {
    data: modelization,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Modelization>(["modelization", id], () => getModelization(id));

  const [isAutoRotateOn, setIsAutoRotateOn] = useState(true);
  const toggleAutoRotate = () => {
    setIsAutoRotateOn(!isAutoRotateOn);
  };

  const orbitRef = useRef<any>();
  const resetOrbitPosition = () => {
    if (orbitRef.current) {
      orbitRef.current.reset();
    }
  };

  const modelRef = useRef<any>();
  const horizontalHalfRotation = () => {
    modelRef.current.rotation.x += Math.PI;
  };
  const exportModel = () => {
    const exporter = new PLYExporter();
    exporter.parse(modelRef.current, (result: BlobPart) => {
      const link = document.createElement("a");
      link.style.display = "none";
      document.body.appendChild(link);
      const blob = new Blob([result], { type: "result/plain" });
      link.href = URL.createObjectURL(blob);
      link.download = modelization?.name + ".ply";
      link.click();
    });
  };

  return {
    modelization,
    isLoading,
    isError,
    error,
    refetch,
    isAutoRotateOn,
    toggleAutoRotate,
    orbitRef,
    resetOrbitPosition,
    modelRef,
    exportModel,
    horizontalHalfRotation,
  };
};

export default useModelization;
