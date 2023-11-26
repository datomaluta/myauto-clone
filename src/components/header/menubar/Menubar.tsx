import { Link } from "react-router-dom";
import HomeIcon from "../../icons/HomeIcon";
import PlusIcon from "../../icons/PlusIcon";
import HeartIcon from "../../icons/HeartIcon";
import UserIcon from "../../icons/UserIcon";
import { useTranslate } from "../../../hooks/useTranslate";
import { translations } from "../../../data/translations/common";

const Menubar = () => {
  const { t } = useTranslate(translations);
  return (
    <div className="bg-white w-full fixed bottom-0 left-0 h-[4.6rem] py-4 px-3 hidden lg:block">
      <ul className="flex text-xs justify-between">
        <li>
          <Link to={"/"} className="flex flex-col items-center gap-1">
            <HomeIcon className="h-6" />
            <span>{t("home")}</span>
          </Link>
        </li>
        <li>
          <Link to={"/"} className="flex flex-col items-center gap-1">
            <PlusIcon className="h-6 fill-white text-text-gray stroke-text-gray" />
            <span>{t("add")}</span>
          </Link>
        </li>
        <li>
          <Link to={"/"} className="flex flex-col items-center gap-1">
            <HeartIcon className="h-6 " />
            <span>{t("favorites")}</span>
          </Link>
        </li>

        <li>
          <Link to={"/"} className="flex flex-col items-center gap-1">
            <UserIcon className="h-6 w-6 stroke-text-gray" />
            <span>{t("login")}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
