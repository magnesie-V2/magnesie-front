import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getPendingModelization } from "../../services";

const usePendingModelization = () => {
  const { id } = useParams();
  const {
    data: pendingModelization,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["pendingModelization", id],
    () => getPendingModelization(id as string),
    { refetchInterval: 500, refetchIntervalInBackground: true }
  );

  const getStatusText = (status: string) => {
    switch (status) {
      case "Finished":
        return "modélisation terminée";
      case "Error":
        return "modélisation échouée";
      default:
        return "modélisation en cours";
    }
  };

  return {
    pendingModelization,
    isLoading,
    isError,
    refetch,
    getStatusText,
  };
};

export default usePendingModelization;
