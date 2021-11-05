import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { ChangeEvent, FormEvent, useState } from "react";

const INITIAL_GREEN_ENERGY = 50;

const useNewModelization = () => {
  const [name, setName] = useState("");
  const [greenEnergy, setGreenEnergy] = useState(INITIAL_GREEN_ENERGY);
  const [images, setImages] = useState<UploadFile[]>([]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleGreenEnergyChange = (newValue: number) => {
    setGreenEnergy(newValue);
  };

  const handleImagesChange = ({ fileList }: UploadChangeParam<UploadFile>) => {
    setImages(fileList);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setName("");
    setGreenEnergy(INITIAL_GREEN_ENERGY);
    setImages([]);
  };

  return {
    name,
    greenEnergy,
    images,
    handleNameChange,
    handleGreenEnergyChange,
    handleImagesChange,
    handleSubmit,
  };
};

export default useNewModelization;
