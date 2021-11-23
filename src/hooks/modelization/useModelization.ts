import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
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
  };
};

export default useModelization;
