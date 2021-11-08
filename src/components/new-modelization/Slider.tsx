import { Slider as AntSlider } from "antd";

type SliderProps = {
  value: number;
  onChange: (newValue: number) => void;
};

const marks = {
  0: "0%",
  25: "25%",
  50: "50%",
  75: "75%",
  100: "100%",
};

const Slider = ({ value, onChange }: SliderProps) => (
  <AntSlider
    marks={marks}
    step={null}
    value={value}
    onChange={onChange}
    tooltipVisible={false}
    trackStyle={{ backgroundColor: "#047857" }}
    handleStyle={{ borderColor: "black" }}
  />
);

export default Slider;
