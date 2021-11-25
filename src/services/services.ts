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
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:7880/submit", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        const submissionID = response.data;
        resolve(submissionID);
      })
      .catch(() => reject());
  });
};

export const getModelization = (modelizationID: string | undefined) => {
  return new Promise<Modelization>((resolve, reject) =>
    setTimeout(() => {
      // reject(
      //   "Corrupted 3D modelization, see https://corrupted-3d-modelization for more informations"
      // );
      // resolve({
      //   name: "Chateau de Sceaux",
      //   modelPath:
      //     "http://0.0.0.0:7881/files/results/1/scene_dense_mesh_refine_texture.ply",
      //   texturePath:
      //     "http://0.0.0.0:7881/files/results/1/scene_dense_mesh_refine_texture.png",
      // });
      let folder =
        modelizationID === "bronze_sculpture" ||
        modelizationID === "climbing_wall"
          ? modelizationID
          : "castle";
      resolve({
        name: modelizationID as string,
        modelPath: "/models/" + folder + "/scene_dense_mesh_refine_texture.ply",
        texturePath:
          "/models/" + folder + "/scene_dense_mesh_refine_texture.png",
      });
    }, 500)
  );
};
