const usePower = (power: string) => {
  const values = power.split("\n").filter((value) => value !== "");
  const timeValues = values.map((value) =>
    Math.floor(Number(value.split(",")[0]))
  );
  const duration = timeValues[timeValues.length - 1];
  const consumptionValues = values.map((array) => Number(array.split(",")[1]));
  const totalConsumption = Math.ceil(
    consumptionValues.reduce(
      (sum, consumptionValue) => sum + consumptionValue,
      0
    )
  );
  return { timeValues, duration, consumptionValues, totalConsumption };
};

export default usePower;
