import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getPendingModelization } from "../../services";

const usePendingModelization = () => {
  const { id } = useParams();
  const {
    data: pendingModelization,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["pendingModelization", id], () =>
    getPendingModelization(id as string)
  );
  return { pendingModelization, isLoading, isError, error, refetch };
};

export default usePendingModelization;
