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
        modelizationID === "climbing_wall"
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
          name: "Castle",
          modelPath: `${FOLDER}/castle/${PLY_FILE}`,
          texturePath: `${FOLDER}/castle/${PNG_FILE}`,
        },
        {
          name: "Bronze Sculpture",
          modelPath: `${FOLDER}/bronze_sculpture/${PLY_FILE}`,
          texturePath: `${FOLDER}/bronze_sculpture/${PNG_FILE}`,
        },
        {
          name: "Climbing wall",
          modelPath: `${FOLDER}/climbing_wall/${PLY_FILE}`,
          texturePath: `${FOLDER}/climbing_wall/${PNG_FILE}`,
        },
      ]);
    }, 500)
  );
};
