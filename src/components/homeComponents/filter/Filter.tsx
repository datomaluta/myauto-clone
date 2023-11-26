import { useState } from "react";
import { Switch } from "@material-tailwind/react";
import TrashIcon from "../../icons/TrashIcon";
import CarIcon from "../../icons/CarIcon";
import TractorIcon from "../../icons/TractorIcon";
import MotoIcon from "../../icons/MotoIcon";

import ManufacturerFilter from "./manufacturerFilter/ManufacturerFilter";
import { useTranslate } from "../../../hooks/useTranslate";
import { translations } from "../../../data/translations/common";

const Filter = () => {
  const { t } = useTranslate(translations);
  const [sellMode, setSellMode] = useState(false);

  return (
    <div className="bg-white rounded-xl max-w-[91.875rem] mx-auto mt-10">
      <div className="flex justify-between items-center py-4 px-6 border-b border-light-gray">
        <div className="flex gap-3 text-sm font-semibold ">
          <span
            className={`${
              sellMode ? "text-light-gray-shade" : "text-text-gray"
            } transition-all duration-300`}
          >
            {t("for_sale")}
          </span>
          <Switch
            crossOrigin={"value"}
            checked={sellMode}
            onChange={() => setSellMode((currState) => !currState)}
            className="h-full w-full checked:bg-[#111c2c]"
            containerProps={{
              className: "w-11 h-6",
            }}
            circleProps={{
              className: "before:hidden left-0.5 border-none",
            }}
          />
          <span
            className={`${
              !sellMode ? "text-light-gray-shade" : "text-text-gray"
            } transition-all duration-300`}
          >
            {t("for_rent")}
          </span>
        </div>
        <button className="flex items-center gap-3 text-primary">
          <TrashIcon className="h-5" />
          <span className="text-sm">{t("filter_clear")}</span>
        </button>
      </div>
      <div className="bg-blac flex gap-4 min-h-[250px] px-4">
        <div className="bg-red-5 border-r border-light-gray pr-12 flex items-center  ">
          <ul className="text-sm font-semibold text-text-gray flex flex-col gap-4 ">
            <li className="flex gap-3 items-center text-primary relative">
              <span className="h-6 w-[0.2rem] bg-primary absolute -right-12 top-0"></span>
              <CarIcon className="h-6 stroke-primary " />
              <span>{t("cars")}</span>
            </li>
            <li className="flex gap-3 items-center">
              <TractorIcon className="h-6 text fill-light-gray-shade" />
              <span>{t("custom_vehicles")}</span>
            </li>
            <li className="flex gap-3 items-center">
              <MotoIcon className="h-6 fill-primary" />
              <span>{t("motorcycles")}</span>
            </li>
          </ul>
        </div>
        {/* filters container */}
        <div className="py-8 ">
          <ManufacturerFilter />
        </div>
      </div>
    </div>
  );
};

export default Filter;
