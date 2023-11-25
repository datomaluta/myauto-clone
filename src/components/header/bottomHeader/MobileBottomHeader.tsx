import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import CloseIcon from "../../icons/CloseIcon";
import { Link } from "react-router-dom";
import {
  setCurrency,
  setLanguage,
} from "../../../store/LanguageAndCurrencySlice";
import { setMobileBottomHeaderIsVisible } from "../../../store/MobileBottomHeaderSlice";
import { AnimatePresence, motion } from "framer-motion";

const MobileBottomHeader = () => {
  const { mobileBottomHeaderIsVisible } = useSelector(
    (state: RootState) => state.mobileBottomHeader
  );
  const { language, currency } = useSelector(
    (state: RootState) => state.languageAndCurrency
  );
  const dispatch = useDispatch();

  return (
    <>
      <AnimatePresence>
        {mobileBottomHeaderIsVisible && (
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            exit={{ y: -200, opacity: 0 }}
            className="bg-white fixed top-0 left-0 w-full h-screen z-20 p-6"
          >
            <div className="flex justify-between items-center">
              <p className="text-xs text-light-gray-shade">მენიუ</p>
              <button
                onClick={() => dispatch(setMobileBottomHeaderIsVisible())}
                className="bg-light-gray rounded-full p-2"
              >
                <CloseIcon className="h-5" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 mt-6 border-b border-light-gray pb-8">
              <li>
                <Link to={"/"}>გაფორმება</Link>
              </li>
              <li>
                <Link to={"/"}>VIN-ის შემოწმება</Link>
              </li>
              <li>
                <Link to={"/"}>დილერები</Link>
              </li>
              <li>
                <Link to={"/"}>ავტოსალონები</Link>
              </li>
              <li>
                <Link to={"/"}>ავტონაწილები</Link>
              </li>
              <li>
                <Link to={"/"}>კატალოგი</Link>
              </li>{" "}
              <li>
                <Link to={"/"}>ბლოგი</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 mt-6 border-b border-light-gray pb-8">
              <li>
                <Link to={"/"}>მესიჯის მიწერა</Link>
              </li>
              <li>
                <Link to={"/"}>ზარის მოთხოვნა</Link>
              </li>
              <li>
                <Link to={"/"}>დახმარება</Link>
              </li>
              <li>
                <Link to={"/"}>კონტაქტი</Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-7 text-sm">
              <button
                onClick={() => dispatch(setLanguage("ka"))}
                className={`border ${
                  language === "ka"
                    ? "bg-gray-for-bg border-text-gray"
                    : "border-light-gray"
                } px-4 py-2 rounded-lg`}
              >
                ქართული
              </button>
              <button
                onClick={() => dispatch(setLanguage("en"))}
                className={`border  ${
                  language === "en"
                    ? "bg-gray-for-bg border-text-gray"
                    : "border-light-gray"
                } px-4 py-2 rounded-lg`}
              >
                English
              </button>

              <button
                className="border border-light-gray rounded-lg px-4 py-2 flex gap-2"
                onClick={() => dispatch(setCurrency("toggle"))}
              >
                <span
                  className={`${
                    currency === "USD" ? "bg-text-gray text-white" : ""
                  } w-5 h-5 text-xs flex items-center justify-center rounded-full font-medium`}
                >
                  $
                </span>
                <span
                  className={`${
                    currency === "GEL" ? "bg-text-gray text-white" : ""
                  } w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold`}
                >
                  ₾
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileBottomHeader;
