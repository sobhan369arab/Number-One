import moment from "jalali-moment";
import { useTranslation } from "react-i18next";

const ChangeMoment = (date) => {
  const { i18n } = useTranslation();

  return moment(date, "YYYY/MM/DD")
    .locale(i18n.language != "en" && "fa")
    .format("YYYY / MM / DD");
};

export default ChangeMoment;
