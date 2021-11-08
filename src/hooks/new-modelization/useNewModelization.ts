import { message } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation } from "react-query";
import { postNewModelizationForm } from "../../services/services";

const INITIAL_GREEN_ENERGY = 50;

const useNewModelization = () => {
  const [name, setName] = useState("");
  const [greenEnergy, setGreenEnergy] = useState(INITIAL_GREEN_ENERGY);
  const [images, setImages] = useState<UploadFile[]>([]);

  const { mutate: sendForm, isLoading: isSendingForm } = useMutation(
    postNewModelizationForm,
    {
      onSuccess: () => {
        message.success("La modélisation a bien été lancée");
        setName("");
        setGreenEnergy(INITIAL_GREEN_ENERGY);
        setImages([]);
      },
      onError: () => {
        message.error("Une erreur est survenue, veuillez réessayer");
      },
    }
  );

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
    if (images.length > 0) {
      sendForm({ name, greenEnergy, images });
    } else {
      message.error(
        "Au moins une image est nécessaire pour réaliser une modélisation"
      );
    }
  };

  return {
    name,
    greenEnergy,
    images,
    isSendingForm,
    handleNameChange,
    handleGreenEnergyChange,
    handleImagesChange,
    handleSubmit,
  };
};

export default useNewModelization;
