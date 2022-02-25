import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useMutation } from "react-query";
import {
  pausePendingModelization,
  resumePendingModelization,
} from "../../services";

type ModelizationControlProps = {
  id: string;
  status: string;
};

const ModelizationControl = ({ id, status }: ModelizationControlProps) => {
  const isRunning = status === "InProgress";
  const isPaused = status === "Paused";
  const { mutate: pauseModelization, isLoading: isPausing } = useMutation(
    pausePendingModelization
  );
  const { mutate: resumeModelization, isLoading: isResuming } = useMutation(
    resumePendingModelization
  );

  const handleClick = () => {
    if (isRunning) {
      pauseModelization(id);
    }
    if (isPaused) {
      resumeModelization(id);
    }
  };
  return (
    <Button
      disabled={isPausing || isResuming}
      onClick={handleClick}
      danger={isRunning}
      icon={isRunning ? <PauseOutlined /> : <CaretRightOutlined />}
    />
  );
};

export default ModelizationControl;
