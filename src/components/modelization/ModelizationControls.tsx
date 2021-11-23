import { BiReset } from "react-icons/bi";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdDownload } from "react-icons/md";
import { RiRestartLine, RiRotateLockFill } from "react-icons/ri";

type ModelizationControlsProps = {
  isAutoRotateOn: boolean;
  toggleAutoRotate: () => void;
  resetOrbitPosition: () => void;
};

const ModelizationControls = ({
  isAutoRotateOn,
  toggleAutoRotate,
  resetOrbitPosition,
}: ModelizationControlsProps) => (
  <div className="flex absolute bottom-0 right-0">
    <button
      onClick={toggleAutoRotate}
      className="flex items-center justify-center bg-white rounded-full w-12 h-12 m-2"
    >
      {isAutoRotateOn ? (
        <RiRotateLockFill size="22" />
      ) : (
        <RiRestartLine size="22" />
      )}
    </button>
    <button
      onClick={resetOrbitPosition}
      className="flex items-center justify-center bg-white rounded-full w-12 h-12 m-2"
    >
      <BiReset size="22" />
    </button>
    <button className="flex items-center justify-center bg-white rounded-full w-12 h-12 m-2">
      <GiWireframeGlobe size="22" />
    </button>
    <button className="flex items-center justify-center bg-white rounded-full w-12 h-12 m-2">
      <MdDownload size="22" />
    </button>
  </div>
);

export default ModelizationControls;
