
const AdvertisingSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-4 pt-2 border-t border-gray-500">
      <h2 className="text-sm font-semibold text-gray-700 uppercase mb-2">
        Advertising
      </h2>
      <div className="w-[240px] h-[400px] bg-meta-white-primary flex items-center justify-center text-meta-white-secondary font-bold text-[23px] font-[time]">
        <h2 className="font-[Georgia,Times,'Century Schoolbook L',serif]">
          {" "}
          VERTICAL <br /> RECTANGLE <br /> (240X400){" "}
        </h2>
      </div>
    </div>
  );
};

export default AdvertisingSection;
