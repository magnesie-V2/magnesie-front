import { ChangeEvent, FormEvent, useState } from "react";

const useNewModelization = () => {
  const [name, setName] = useState("");
  const [greenEnergy, setGreenEnergy] = useState(50);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleGreenEnergyChange = () => {
    setGreenEnergy(50);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setName("");
    setGreenEnergy(50);
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
