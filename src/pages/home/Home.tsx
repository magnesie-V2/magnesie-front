import { Canvas } from "@react-three/fiber";
import { useQuery } from "react-query";
import ModelizationsDiplay from "../../components/home/ModelizationsDisplay";
import ErrorBox from "../../components/shared/ErrorBox";
import Spinner from "../../components/shared/Spinner";
import { getModelizations } from "../../services/services";

const Home = () => {
  const {
    data: modelizations,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Modelization[]>("modelizations", getModelizations);

  if (isLoading) {
    return <Spinner text="Chargement des modélisations..." />;
  }

  if (isError) {
    return <ErrorBox error={error as string} refetch={refetch} />;
  }

  return (
    <div className="h-5/6 mt-2">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <pointLight color="white" />
        <pointLight position={[20, 20, -20]} color="white" />
        <pointLight position={[-20, -20, 20]} color="white" />
        <ModelizationsDiplay modelizations={modelizations || []} />
      </Canvas>
    </div>
  );
};

export default Home;
