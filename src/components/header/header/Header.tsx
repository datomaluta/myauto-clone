import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/images/mylogo.png";
import SearchIcon from "../../icons/SearchIcon";
import PlusIcon from "../../icons/PlusIcon";
import EarthIcon from "../../icons/EarthIcon";
import DownArrowIcon from "../../icons/DownArrowIcon";
import UserIcon from "../../icons/UserIcon";
import BurgerIcon from "../../icons/BurgerIcon";
import { setMobileBottomHeaderIsVisible } from "../../../store/MobileBottomHeaderSlice";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import tnetLogo from "../../../assets/images/tnet.png";
import { useTranslate } from "../../../hooks/useTranslate";
import { translations } from "../../../data/translations/common";
import {
  setCurrency,
  setLanguage,
} from "../../../store/LanguageAndCurrencySlice";
import { RootState } from "../../../store/store";

const Header = () => {
  const [languageAndCurrencyModalIsOpen, setLanguageAndCurrenctModalIsOpen] =
    useState(false);
  const [mobileSearchIsVisible, setMobileSearchIsVisible] = useState(false);
  const { language, currency } = useSelector(
    (state: RootState) => state.languageAndCurrency
  );
  const dispatch = useDispatch();
  const { t } = useTranslate(translations);

  return (
    <header className="bg-white  fixed top-0 left-0 w-full ">
      <div className="max-w-[91.875rem] flex items-center mx-auto justify-between py-4 px-3">
        <div className="flex flex-grow">
          <div className="h-10 lg:h-8 shrink-0">
            <img className="h-full" src={logo} alt="myautologo" />
          </div>
          <div className="lg:hidden border border-light-gray h-10 ml-8 flex gap-2 items-center rounded-xl py-2 px-2 max-w-[20rem] w-full shrink-0">
            <SearchIcon className="h-5" />
            <input
              className="bg-transparent text-sm outline-none"
              type="text"
              placeholder={t("search")}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ">
          <Link
            className="lg:hidden h-10 text-text-orange hover:bg-light-orange bg-lighter-orange transition-all duration-300  px-3 text-sm rounded-xl flex items-center gap-1"
            to={"/"}
          >
            <PlusIcon className="h-6 fill-primary text-white stroke-none" />
            <span className="font-medium">{t("add")}</span>
          </Link>
          <div className="lg:hidden relative 0">
            <button
              className="h-10  rounded-xl border border-light-gray flex gap-2 items-center px-3 hover:bg-gray-for-bg hover:border-light-gray-shade transition-all duration-300 relative"
              onClick={() =>
                setLanguageAndCurrenctModalIsOpen((currState) => !currState)
              }
            >
              <EarthIcon className="h-6" />
              <span className="text-sm font-semibold">
                {language === "ka" ? "ქართული" : "English"},
              </span>
              <span className="text-sm w-4">
                {currency === "GEL" ? "₾" : "$"}
              </span>
              <DownArrowIcon className="h-3" />
            </button>
            {languageAndCurrencyModalIsOpen && (
              <div className="w-60 min-h-40 bg-white absolute -bottom-2 right-0 left-0 z-100 translate-y-full rounded-xl">
                <div className="border-b border-light-gray p-4">
                  <p className="text-left text-xs">{t("language")}</p>
                  <ul className="flex flex-col gap-3 mt-5 text-sm">
                    <li>
                      <button
                        onClick={() => dispatch(setLanguage("ka"))}
                        className="flex items-center gap-2 font-medium"
                      >
                        <span
                          className={`h-6 w-6 bg-white block rounded-full ${
                            language === "ka"
                              ? "border-8 border-primary"
                              : "border border-light-gray"
                          }`}
                        ></span>
                        <span>ქართული</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(setLanguage("en"))}
                        className="flex items-center gap-2 font-medium"
                      >
                        <span
                          className={`h-6 w-6 bg-white block rounded-full ${
                            language === "en"
                              ? "border-8 border-primary"
                              : "border border-light-gray"
                          }`}
                        ></span>
                        <span>English</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <p className="text-left text-xs">ვალუტა</p>
                  <ul className="flex flex-col gap-3 mt-5 text-sm">
                    <li>
                      <button
                        onClick={() => dispatch(setCurrency("USD"))}
                        className="flex items-center gap-2 font-medium"
                      >
                        <span
                          className={`h-6 w-6 bg-white block rounded-full ${
                            currency === "USD"
                              ? " border-8 border-primary"
                              : " border border-light-gray"
                          }`}
                        ></span>
                        <span>USD - $</span>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(setCurrency("GEL"))}
                        className="flex items-center gap-2 font-medium"
                      >
                        <span
                          className={`h-6 w-6 bg-white block rounded-full ${
                            currency === "GEL"
                              ? " border-8 border-primary"
                              : " border border-light-gray"
                          }`}
                        ></span>
                        <span>GEL - ₾</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <Link
            to={"/"}
            className="lg:hidden h-10 rounded-xl border border-light-gray flex gap-2 items-center px-3 hover:bg-gray-for-bg hover:border-light-gray-shade transition-all duration-300 relative text-sm font-semibold"
          >
            <UserIcon className="h-6 w-6 stroke-black" />
            {t("log_in")}
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileSearchIsVisible(true)}
              className="hidden lg:block"
            >
              <SearchIcon className="h-5 " />
            </button>
            <button
              onClick={() => dispatch(setMobileBottomHeaderIsVisible())}
              className="hidden lg:block"
            >
              <BurgerIcon className="h-7 " />
            </button>
            <AnimatePresence>
              {mobileSearchIsVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="bg-white flex items-center px-4 absolute top-0 left-0 w-full h-full z-20 gap-4"
                >
                  <button onClick={() => setMobileSearchIsVisible(false)}>
                    <LeftArrowIcon className="h-5 mr-12 sm:mr-0" />
                  </button>
                  <input
                    className="text-sm bg-transparent outline-none border-b border-transparent focus:border-primary w-full"
                    type="text"
                    placeholder="ძებნა"
                  />
                  <button>
                    <SearchIcon className="h-5 justify-self-end ml-auto" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <Link
              className="h-10 lg:h-8 w-10 lg:w-8 rounded-full border border-light-gray flex gap-1 items-center p-2 lg:p-1 hover:bg-gray-for-bg hover:border-light-gray-shade transition-all duration-300 relative text-sm "
              to={"/"}
            >
              <img
                className="h-full w-full object-cover"
                src={tnetLogo}
                alt="tnet"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
