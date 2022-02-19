import { UploadFile } from "antd/lib/upload/interface";
import axios, { AxiosResponse } from "axios";

export const getFutureWeather = () =>
  axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?lat=47.282247&lon=-1.521323&exclude=current,minutely,daily,alerts&appid=" +
      process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY +
      "&units=metric&lang=fr"
  );

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

export const getPendingModelizations = (): Promise<
  AxiosResponse<{ id: string; name: string }[]>
> => axios.get("http://localhost:7880//new_submissions");

export const getPendingModelization = (
  modelizationID: string
): Promise<AxiosResponse<PendingModelization>> =>
  axios.get(`http://localhost:7879/job/report/${modelizationID}`);

export const getModelizations = (): Promise<AxiosResponse<Modelization[]>> =>
  axios.get("http://localhost:7881/results");

export const getModelization = (modelizationID: string | undefined) => {
  return new Promise<Modelization>((resolve) =>
    setTimeout(() => {
      resolve({
        id: "5",
        name: modelizationID as string,
        modelPath: "???",
        texturePath: `???`,
        power:
          "5.000215534,201.98\n10.000403961,217.09\n15.000605187,188.57\n20.000785061,215.81\n25.000970505,196.06\n30.001194376,200.08\n35.001389456,209.29\n40.001556273,397.14\n45.001707553,518.60\n50.001857624,525.00\n55.002005826,626.44\n60.002153895,625.78\n65.002308751,628.67\n70.002463884,629.73\n75.002613217,631.15\n80.002770205,629.56\n",
      });
    }, 500)
  );
};
