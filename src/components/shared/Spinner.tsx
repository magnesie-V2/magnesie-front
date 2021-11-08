import { CodeSandboxOutlined } from "@ant-design/icons";
import { Spin } from "antd";

type SpinnerProps = {
  text: string;
};

const Spinner = ({ text }: SpinnerProps) => (
  <div className="flex flex-col justify-center items-center h-3/4 sm:h-5/6">
    <Spin
      indicator={
        <CodeSandboxOutlined
          spin
          className="text-black"
          style={{ fontSize: 100 }}
        />
      }
    />
    <p className="text-3xl mt-16 text-center">{text}</p>
  </div>
);

export default Spinner;
