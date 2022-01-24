import { BiReset } from "react-icons/bi";
import { MdDownload } from "react-icons/md";
import { RiRestartLine, RiRotateLockFill } from "react-icons/ri";
import Tooltip from "../shared/Tooltip";

type DetailedModelizationControlsProps = {
  isAutoRotateOn: boolean;
  toggleAutoRotate: () => void;
  resetOrbitPosition: () => void;
  exportModel: () => void;
};

const DetailedModelizationControls = ({
  isAutoRotateOn,
  toggleAutoRotate,
  resetOrbitPosition,
  exportModel,
}: DetailedModelizationControlsProps) => (
  <div className="flex absolute bottom-0 right-0">
    <Tooltip
      text={`${
        isAutoRotateOn ? "Désactiver" : "Activer"
      } la rotation automatique`}
    >
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
    </Tooltip>
    <Tooltip text="Réinitialiser la position de la caméra">
      <button
        onClick={resetOrbitPosition}
        className="flex items-center justify-center bg-white rounded-full w-12 h-12 m-2"
      >
        <BiReset size="22" />
      </button>
    </Tooltip>
    <Tooltip text="Télécharger le modèle 3D">
      <button
        onClick={exportModel}
        className="flex items-center justify-center bg-white rounded-full w-12 h-12 m-2"
      >
        <MdDownload size="22" />
      </button>
    </Tooltip>
  </div>
);

export default DetailedModelizationControls;
