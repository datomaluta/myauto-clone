import toyotaLogo from "../../../../assets/images/manufacturerLogos/toyota.png";
import mercedesLogo from "../../../../assets/images/manufacturerLogos/mercedes.png";
import fordLogo from "../../../../assets/images/manufacturerLogos/ford.png";
import bmwLogo from "../../../../assets/images/manufacturerLogos/bmw.png";
import hyundaiLogo from "../../../../assets/images/manufacturerLogos/hyundai.png";
import subaruLogo from "../../../../assets/images/manufacturerLogos/subaru.png";
import hondaLogo from "../../../../assets/images/manufacturerLogos/honda.png";
import lexusLogo from "../../../../assets/images/manufacturerLogos/lexus.png";
import nissanLogo from "../../../../assets/images/manufacturerLogos/nissan.png";
import jeepLogo from "../../../../assets/images/manufacturerLogos/jeep.png";

const ManufacturerLogos = ({handleSelection, selectedOptions}) => {
  return (
    <div className="grid grid-cols-5 gap-y-4">
      <div
        onClick={() => handleSelection("Toyota")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Toyota") ? "border-light-gray-shade" : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={toyotaLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Mercedes-Benz")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Mercedes-Benz")
         ? "border-light-gray-shade"
         : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={mercedesLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Ford")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Ford") ? "border-light-gray-shade" : ""
     }`}
      >
        <img className="h-[90%] w-auto object-cover" src={fordLogo} alt="car" />
      </div>
      <div
        onClick={() => handleSelection("BMW")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("BMW") ? "border-light-gray-shade" : ""
     }`}
      >
        <img className="h-[90%] w-auto object-cover" src={bmwLogo} alt="car" />
      </div>
      <div
        onClick={() => handleSelection("Hyundai")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Hyundai") ? "border-light-gray-shade" : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={hyundaiLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Subaru")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Subaru") ? "border-light-gray-shade" : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={subaruLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Honda")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Honda") ? "border-light-gray-shade" : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={hondaLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Lexus")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Lexus") ? "border-light-gray-shade" : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={lexusLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Nissan")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Nissan") ? "border-light-gray-shade" : ""
     }`}
      >
        <img
          className="h-[90%] w-auto object-cover"
          src={nissanLogo}
          alt="car"
        />
      </div>
      <div
        onClick={() => handleSelection("Jeep")}
        className={`w-12 h-10 border border-light-gray rounded-lg flex
     items-center justify-center cursor-pointer transition-all duration-300 ${
       selectedOptions.includes("Jeep") ? "border-light-gray-shade" : ""
     }`}
      >
        <img className="h-[90%] w-auto object-cover" src={jeepLogo} alt="car" />
      </div>
    </div>
  );
};

export default ManufacturerLogos;
