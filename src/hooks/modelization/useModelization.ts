import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
// @ts-ignore
import { PLYExporter } from "three/examples/jsm/exporters/PLYExporter.js";
import { getModelization, getPower } from "../../services";

const useModelization = () => {
  const { id } = useParams();
  const {
    data: modelization,
    isLoading: isLoadingModelization,
    isError,
    refetch,
  } = useQuery<Modelization>(["modelization", id], () => getModelization(id));
  const { data: powerResponse, isLoading: isLoadingPower } = useQuery(
    ["power", id],
    () => getPower(id || "")
  );

  const [isAutoRotateOn, setIsAutoRotateOn] = useState(false);
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
  const exportModel = () => {
    if (modelRef.current) {
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
    }
  };

  return {
    modelization,
    isLoading: isLoadingModelization || isLoadingPower,
    isError,
    refetch,
    isAutoRotateOn,
    toggleAutoRotate,
    orbitRef,
    resetOrbitPosition,
    modelRef,
    exportModel,
    power: powerResponse?.data.power,
  };
};

export default useModelization;
