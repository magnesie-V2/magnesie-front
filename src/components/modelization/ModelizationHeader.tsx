type ModelizationHeaderProps = {
  name: string;
  duration: number;
  consumption: number;
};

const ModelizationHeader = ({
  name,
  duration,
  consumption,
}: ModelizationHeaderProps) => {
  const [hours, minutes, seconds] = new Date(duration * 1000)
    .toISOString()
    .slice(11, -5)
    .split(":");
  return (
    <>
      <p className="text-3xl mt-8 text-center px-4">{name}</p>
      <div className="flex flex-col items-center mt-8 sm:w-3/4 xl:w-4/6 px-4">
        <p className="text-xl font-bold text-center">
          Durée de la modélisation : {hours} heures {minutes} minutes {seconds}{" "}
          secondes
        </p>
        <p className="text-xl font-bold mt-4 text-center">
          Consommation :{" "}
          {consumption.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Joules
        </p>
      </div>
    </>
  );
};

export default ModelizationHeader;
