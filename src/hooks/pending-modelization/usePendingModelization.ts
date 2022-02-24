import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getPendingModelization } from "../../services";

const usePendingModelization = () => {
  const { id, name } = useParams();
  const {
    data: response,
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

  const getProgressStatus = (status: string) => {
    switch (status) {
      case "Finished":
        return "success";
      case "Error":
        return "exception";
      default:
        return "active";
    }
  };

  return {
    id,
    pendingModelization: { ...response?.data, name },
    isLoading,
    isError,
    refetch,
    getStatusText,
    getProgressStatus,
  };
};

export default usePendingModelization;
