import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getModelization } from "../../services/services";

const useModelization = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: modelization,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Modelization>(["modelization", id], () => getModelization(id));

  return {
    modelization,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useModelization;
