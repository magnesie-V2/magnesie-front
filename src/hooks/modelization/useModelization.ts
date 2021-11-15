import { useState } from "react";
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

  return {
    modelization,
    isLoading,
    isError,
    error,
    refetch,
    isAutoRotateOn,
    toggleAutoRotate,
  };
};

export default useModelization;
