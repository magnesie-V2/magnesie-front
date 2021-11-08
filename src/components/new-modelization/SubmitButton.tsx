import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

type SubmitButtonProps = {
  isDisabled: boolean;
};

const SubmitButton = ({ isDisabled }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isDisabled}
    className="bg-green-700 hover:bg-opacity-80 text-white text-xl font-medium py-2 px-4 rounded w-full mt-12 disabled:cursor-default"
  >
    {isDisabled ? (
      <Spin
        indicator={
          <LoadingOutlined className="text-white" style={{ fontSize: 30 }} />
        }
      />
    ) : (
      "Modéliser"
    )}
  </button>
);

export default SubmitButton;
