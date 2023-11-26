import { useState, useRef, useEffect } from "react";
import { carManufacturers } from "../../../../data/staticData/manufacturers";
import { Checkbox } from "@material-tailwind/react";
import DownArrowIcon from "../../../icons/DownArrowIcon";
import { AnimatePresence, motion } from "framer-motion";
import ManufacturerLogos from "../filterUiComponents/ManufacturerLogos";
import CloseIcon from "../../../icons/CloseIcon";
import { useTranslate } from "../../../../hooks/useTranslate";
import { translations } from "../../../../data/translations/common";

const ManufacturerFilter = () => {
  const { t } = useTranslate(translations);
  const manufacturerRef = useRef<HTMLDivElement>(null);
  const manufacturerInputRef = useRef<HTMLInputElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [manufacturerFilterAcive, setManufacturerFilterActive] =
    useState(false);

  // effects for input focus and handle click outside of div
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        manufacturerRef.current &&
        !manufacturerRef.current.contains(event.target as Node)
      ) {
        setManufacturerFilterActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (manufacturerInputRef.current) {
      manufacturerInputRef?.current.focus();
    }
  }, [manufacturerFilterAcive]);

  // this is options based on search
  const filteredOptions = carManufacturers.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // logic for select manufacturers
  const handleSelection = (value: string) => {
    if (selectedOptions.includes(value)) {
      const filteredOptionsForUncheck = selectedOptions.filter(
        (item) => item !== value
      );
      setSelectedOptions(filteredOptionsForUncheck);
    } else {
      setSelectedOptions((currState) => [...currState, value]);
    }
  };

  return (
    <div className="relative" ref={manufacturerRef}>
      {/* this is div for input and label */}
      <div
        onClick={() => setManufacturerFilterActive(true)}
        className={`border  px-4 py-3 text-sm rounded-lg flex items-center 
            justify-between  w-[228px] h-12 cursor-pointer ${
              manufacturerFilterAcive
                ? "border-light-gray-shade"
                : "border-light-gray"
            }`}
      >
        <div className="flex flex-col">
          <label
            className={`${
              manufacturerFilterAcive
                ? "text-sm text-text-light-gray -translate-y-1"
                : ""
            } transition-all duration-300 cursor-pointer`}
            htmlFor=""
          >
            {t("manufacturer")}
          </label>
          {manufacturerFilterAcive && (
            <input
              ref={manufacturerInputRef}
              className="outline-none"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
        </div>
        {selectedOptions.length === 0 && (
          <DownArrowIcon
            className={`h-12 w-4 transition-all duration-300 ${
              manufacturerFilterAcive ? "rotate-180" : ""
            }`}
          />
        )}
        {selectedOptions.length > 0 && (
          <button onClick={() => setSelectedOptions([])}>
            <CloseIcon className="h-5" />
          </button>
        )}
      </div>
      {/* this is div for dropdown of car manufacturers */}
      <AnimatePresence>
        {manufacturerFilterAcive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white rounded-lg absolute -bottom-2 left-0 translate-y-full p-4 w-[21.25rem] h-[23.75rem] border border-light-gray shadow-lg  "
          >
            <div className="overflow-y-auto h-[90%]">
              {/* seperated component of manufacturer logos */}
              <ManufacturerLogos
                selectedOptions={selectedOptions}
                handleSelection={handleSelection}
              />
              <div className="bg-red- flex flex-col gap-1 mt-4">
                {filteredOptions.length === 0 ? (
                  <p className="text-center">ვერ მოიძებნა</p>
                ) : (
                  filteredOptions?.map((brand) => (
                    <div key={brand}>
                      <Checkbox
                        color="green"
                        crossOrigin={"value"}
                        label={brand}
                        value={brand}
                        checked={selectedOptions.includes(brand)}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleSelection(e.target.value)
                        }
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
            <button
              onClick={() => setManufacturerFilterActive(false)}
              className="bg-common-blue  text-white py-2 rounded-lg w-full font-semibold"
            >
              {t("choose")}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManufacturerFilter;
