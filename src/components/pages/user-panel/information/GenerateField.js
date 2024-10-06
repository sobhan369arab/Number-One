import { useTranslation } from "react-i18next";

const GenerateField = (title, description) => {
  const { i18n } = useTranslation();

  const field = { 
    title: [i18n.language == "en" ? title[1] : title[0]],
     description: typeof description == "string" ? description : [i18n.language == "en" ? description[1] : description[0]]
    };
  return field;
};

export default GenerateField;
