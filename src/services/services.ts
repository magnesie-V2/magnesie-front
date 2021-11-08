import { UploadFile } from "antd/lib/upload/interface";

export const postNewModelizationForm = ({
  name,
  greenEnergy,
  images,
}: {
  name: string;
  greenEnergy: number;
  images: UploadFile[];
}) => {
  console.log(name, greenEnergy, images);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.round(Math.random()) === 0 ? resolve("OK") : reject();
    }, 1000);
  });
};

export const getModelization = (modelizationID: string) => {
  console.log(modelizationID);
  return new Promise<Modelization>((resolve, reject) =>
    setTimeout(() => {
      reject(
        "Corrupted 3D modelization, see https://corrupted-3d-modelization for more informations"
      );
      // resolve({ name: "Donuts" });
    }, 10)
  );
};
