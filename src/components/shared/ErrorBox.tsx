import { AiOutlineRedo } from "react-icons/ai";

type ErrorBoxProps = {
  refetch: () => void;
};

const ErrorBox = ({ refetch }: ErrorBoxProps) => (
  <div className="flex flex-col justify-center items-center h-3/4 sm:h-5/6 px-12">
    <div>
      <div className="flex justify-between items-center bg-red-500 rounded-t px-4 py-2">
        <p className="text-white text-lg font-bold mr-4">
          Une erreur est survenue
        </p>
        <button
          onClick={() => refetch()}
          className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <AiOutlineRedo className="mr-3" size="26" />
          <p>Réessayer</p>
        </button>
      </div>
    </div>
  </div>
);

export default ErrorBox;
