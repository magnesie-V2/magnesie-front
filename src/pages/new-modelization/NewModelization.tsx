import ImageUpload from "../../components/form/ImageUpload";
import Slider from "../../components/form/Slider";
import Textfield from "../../components/form/Textfield";
import useNewModelization from "../../hooks/form/useNewModelization";

const NewModelization = () => {
  const { name, greenEnergy, handleNameChange, handleSubmit } =
    useNewModelization();
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl mt-12">Nouvelle modélisation</p>
      <form onSubmit={handleSubmit} className="p-4 w:full sm:w-3/5 xl:w-2/5">
        <div className="flex items-center mt-12 sm:mt-20">
          <p className="text-xl w-1/2 mr-6">Nom de la modélisation</p>
          <Textfield value={name} onChange={handleNameChange} />
        </div>
        <div className="flex items-center mt-12 sm:mt-20">
          <p className="text-xl w-1/2 mr-6">Énergie verte</p>
          <div className="w-1/2 pt-3">
            <Slider value={greenEnergy} />
          </div>
        </div>
        <div className="border-2 border-black mt-12 sm:mt-16 p-4 rounded">
          <ImageUpload />
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-opacity-80 text-white text-xl font-medium py-2 px-4 rounded w-full mt-12"
        >
          Modéliser
        </button>
      </form>
    </div>
  );
};

export default NewModelization;
