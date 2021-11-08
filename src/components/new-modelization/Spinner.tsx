import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Spinner = () => (
  <Spin
    indicator={
      <LoadingOutlined className="text-white" style={{ fontSize: 30 }} />
    }
  />
);

export default Spinner;
