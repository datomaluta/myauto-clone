import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type TranslationObject = {
  [key: string]: {
    [key: string]: string;
  };
};

type UseTranslateFunction = (
  translateObj?: TranslationObject,
  anotherObj?: TranslationObject,
  thirdObj?: TranslationObject
) => {
  t: (key: string) => string;
};

export const useTranslate: UseTranslateFunction = (
  translateObj = {},
  anotherObj = {},
  thirdObj = {}
) => {
  const concatedObj: TranslationObject = {
    ...translateObj,
    ...anotherObj,
    ...thirdObj,
  };
  const { language } = useSelector(
    (state: RootState) => state.languageAndCurrency
  );

  const t = (key: string) => {
    if (concatedObj[key]) {
      return concatedObj[key][language] || key;
    } else {
      return key;
    }
  };

  return { t };
};
