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
