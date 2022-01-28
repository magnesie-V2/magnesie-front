import useNewModelization from "../../hooks/new-modelization/useNewModelization";
import ImageUpload from "./ImageUpload";
import Slider from "./Slider";
import SubmitButton from "./SubmitButton";
import Textfield from "./Textfield";

type NewModelizationFormProps = {
  isWeatherGood: boolean;
};

const NewModelizationForm = ({ isWeatherGood }: NewModelizationFormProps) => {
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
        <div className="flex justify-center w:full mt-4 font-bold">
          La météo pour les 3 prochaines heures est{" "}
          {isWeatherGood ? "favorable" : "défavorable"} à une utilisation d'un
          fort pourcentage d'énergie verte
          <span className="flex items-center text-3xl ml-1.5">
            {isWeatherGood ? "☀" : "🌧"}
          </span>
        </div>
        <div className="border-2 border-black mt-12 sm:mt-16 p-4 rounded">
          <ImageUpload
            images={images}
            handleImagesChange={handleImagesChange}
          />
        </div>
        <SubmitButton isDisabled={isSendingForm} />
      </form>
    </div>
  );
};

export default NewModelizationForm;
