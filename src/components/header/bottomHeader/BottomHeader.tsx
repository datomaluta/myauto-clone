import { Link } from "react-router-dom";
import { useTranslate } from "../../../hooks/useTranslate";
import { translations } from "../../../data/translations/common";

const BottomHeader = () => {
  const { t } = useTranslate(translations);
  return (
    <div className="flex mt-[72px] text-sm h-14 py-4 bg-white items-center lg:hidden mb-2 border-t border-light-gray">
      <div className="max-w-[91.875rem] mx-auto flex justify-between w-full px-3">
        <ul className="flex gap-3">
          <li>
            <Link to="/" className="hover:text-primary">
              {t("register")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("vin_check")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("dealers")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("dealerships")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("auction")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("auto_parts")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("catalogue")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("blog")}
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <Link to="/" className="hover:text-primary">
              {t("help")}
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-primary">
              {t("contact")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomHeader;
