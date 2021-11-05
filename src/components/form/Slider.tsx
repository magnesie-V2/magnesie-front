import { Slider as AntSlider } from "antd";

type SliderProps = {
  value: number;
};

const marks = {
  0: "0%",
  25: "25%",
  50: "50%",
  75: "75%",
  100: "100%",
};

const Slider = ({ value }: SliderProps) => (
  <AntSlider
    marks={marks}
    step={null}
    value={50}
    onChange={(event) => console.log(event)}
    trackStyle={{}}
    handleStyle={{}}
  />
);

export default Slider;
