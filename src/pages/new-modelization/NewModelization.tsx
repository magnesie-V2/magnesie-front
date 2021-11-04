import Slider from "../../components/form/Slider";
import Textfield from "../../components/form/Textfield";

const NewModelization = () => (
  <div className="flex flex-col items-center">
    <p className="text-3xl mt-12">Nouvelle modélisation</p>
    <form className="w-3/5">
      <div className="flex items-center mt-20">
        <p className="text-xl w-1/2 mr-6">Nom de la modélisation</p>
        <Textfield />
      </div>
      <div className="flex items-center mt-20">
        <p className="text-xl w-1/2 mr-6">Énergie verte</p>
        <div className="w-1/2">
          <Slider />
        </div>
      </div>
      <button
        type="submit"
        className="bg-green-700 hover:bg-opacity-80 text-white text-xl font-medium py-2 px-4 rounded w-full mt-20"
      >
        Modéliser
      </button>
    </form>
  </div>
);

export default NewModelization;
