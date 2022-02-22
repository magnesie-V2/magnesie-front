import { Canvas } from "@react-three/fiber";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import ModelizationsDiplay from "../../components/home/ModelizationsDisplay";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import { getModelizations } from "../../services";

const Home = () => {
  const navigate = useNavigate();
  const {
    data: response,
    isLoading,
    isError,
    refetch,
  } = useQuery("modelizations", getModelizations, {
    refetchInterval: 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) {
    return <Spinner text="Chargement des modélisations..." />;
  }

  if (isError) {
    return <ErrorBox refetch={refetch} />;
  }

  return (
    <div className="h-5/6 mt-2">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <pointLight color="white" />
        <pointLight position={[20, 20, -20]} color="white" />
        <pointLight position={[-20, -20, 20]} color="white" />
        <ModelizationsDiplay
          modelizations={response?.data || []}
          navigate={navigate}
        />
      </Canvas>
    </div>
  );
};

export default Home;
