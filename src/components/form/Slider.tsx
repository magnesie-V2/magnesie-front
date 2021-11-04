const Slider = () => (
  <>
    <div className="bg-gray-500 h-2 rounded-full relative">
      <span className="border border-black bg-white h-4 w-4 absolute top-0 -ml-2 -mt-1 z-10 rounded-full cursor-pointer left-1/2" />
      <span className="bg-green-700 h-2 absolute left-0 top-0 rounded-full w-1/2" />
    </div>
    <div className="flex justify-between mt-2 text-xs lg:text-base text-black">
      <span className="w-8 text-left">0%</span>
      <span className="w-8 text-center">25%</span>
      <span className="w-8 text-center">50%</span>
      <span className="w-8 text-center">75%</span>
      <span className="w-8 text-right">100%</span>
    </div>
  </>
);

export default Slider;
