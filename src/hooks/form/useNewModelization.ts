import { ChangeEvent, FormEvent, useState } from "react";

const INITIAL_GREEN_ENERGY = 50;

const useNewModelization = () => {
  const [name, setName] = useState("");
  const [greenEnergy, setGreenEnergy] = useState(INITIAL_GREEN_ENERGY);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleGreenEnergyChange = (newValue: number) => {
    setGreenEnergy(newValue);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setName("");
    setGreenEnergy(INITIAL_GREEN_ENERGY);
  };

  return {
    name,
    greenEnergy,
    handleNameChange,
    handleGreenEnergyChange,
    handleSubmit,
  };
};

export default useNewModelization;
