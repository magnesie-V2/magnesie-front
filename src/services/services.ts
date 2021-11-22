import { UploadFile } from "antd/lib/upload/interface";
import axios from "axios";

export const postNewModelizationForm = ({
  name,
  greenEnergy,
  images,
}: {
  name: string;
  greenEnergy: number;
  images: UploadFile[];
}) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("greenEnergy", greenEnergy.toString());
  images.forEach((image) =>
    formData.append("photos", image.originFileObj as Blob)
  );
  return axios.post("http://localhost:7880/submit", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getModelization = (modelizationID: string | undefined) => {
  console.log(modelizationID);
  return new Promise<Modelization>((resolve, reject) =>
    setTimeout(() => {
      // reject(
      //   "Corrupted 3D modelization, see https://corrupted-3d-modelization for more informations"
      // );
      resolve({
        name: "Chateau de Sceaux",
        modelPath: "/chateau.ply",
        texturePath: "/chateau.png",
      });
    }, 500)
  );
};
