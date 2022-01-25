import { UploadFile } from "antd/lib/upload/interface";
import axios from "axios";

const FOLDER = "/models";
const PLY_FILE = "scene_dense_mesh_refine_texture.ply";
const PNG_FILE = "scene_dense_mesh_refine_texture.png";

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
  return new Promise<Modelization>((resolve) =>
    setTimeout(() => {
      // resolve({
      //   name: "Chateau de Sceaux",
      //   modelPath:
      //     "http://0.0.0.0:7881/files/results/1/scene_dense_mesh_refine_texture.ply",
      //   texturePath:
      //     "http://0.0.0.0:7881/files/results/1/scene_dense_mesh_refine_texture.png",
      // });
      let object =
        modelizationID === "bronze_sculpture" ||
        modelizationID === "horse" ||
        modelizationID === "dragon" ||
        modelizationID === "bunny"
          ? modelizationID
          : "castle";
      resolve({
        name: modelizationID as string,
        modelPath: `${FOLDER}/${object}/${PLY_FILE}`,
        texturePath: `${FOLDER}/${object}/${PNG_FILE}`,
      });
    }, 500)
  );
};

export const getModelizations = () => {
  return new Promise<Modelization[]>((resolve) =>
    setTimeout(() => {
      resolve([
        {
          name: "castle",
          modelPath: `${FOLDER}/castle/${PLY_FILE}`,
          texturePath: `${FOLDER}/castle/${PNG_FILE}`,
        },
        {
          name: "horse",
          modelPath: `${FOLDER}/horse/${PLY_FILE}`,
          texturePath: `${FOLDER}/horse/${PNG_FILE}`,
        },
        {
          name: "bunny",
          modelPath: `${FOLDER}/bunny/${PLY_FILE}`,
          texturePath: `${FOLDER}/bunny/${PNG_FILE}`,
        },
        {
          name: "dragon",
          modelPath: `${FOLDER}/dragon/${PLY_FILE}`,
          texturePath: `${FOLDER}/dragon/${PNG_FILE}`,
        },
        {
          name: "bronze_sculpture",
          modelPath: `${FOLDER}/bronze_sculpture/${PLY_FILE}`,
          texturePath: `${FOLDER}/bronze_sculpture/${PNG_FILE}`,
        },
      ]);
    }, 500)
  );
};
