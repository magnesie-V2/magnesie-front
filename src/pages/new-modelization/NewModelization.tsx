import ImageUpload from "../../components/new-modelization/ImageUpload";
import Slider from "../../components/new-modelization/Slider";
import Spinner from "../../components/new-modelization/Spinner";
import Textfield from "../../components/new-modelization/Textfield";
import useNewModelization from "../../hooks/new-modelization/useNewModelization";

const NewModelization = () => {
  const {
    name,
    greenEnergy,
    images,
    isSendingForm,
    handleNameChange,
    handleGreenEnergyChange,
    handleImagesChange,
    handleSubmit,
  } = useNewModelization();
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
            <Slider value={greenEnergy} onChange={handleGreenEnergyChange} />
          </div>
        </div>
        <div className="border-2 border-black mt-12 sm:mt-16 p-4 rounded">
          <ImageUpload
            images={images}
            handleImagesChange={handleImagesChange}
          />
        </div>
        <button
          type="submit"
          disabled={isSendingForm}
          className="bg-green-700 hover:bg-opacity-80 text-white text-xl font-medium py-2 px-4 rounded w-full mt-12 disabled:cursor-default"
        >
          {isSendingForm ? <Spinner /> : "Modéliser"}
        </button>
      </form>
    </div>
  );
};

export default NewModelization;
