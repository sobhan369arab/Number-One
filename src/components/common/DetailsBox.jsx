import { useTranslation } from "react-i18next";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  YouTubeIcon
} from "../../core/icon";
import { Button } from ".";

export const detailVariant = {
  "event-detail": "md:absolute top-96",
  "course-detail": "lg:w-64 mb-8",
}
export const detailInfoVariant = {
  "event-detail": "EventInfo",
  "course-detail": "CourseInfo",
}
export const priceInfoVariant = {
  "event-detail": "EventPrice",
  "course-detail": "CoursePrice",
}

const DetailsBox = ({
  variant,
  price,
  Detail,
  arrowColor,
  colorButton,
  btnText,
}) => {
  const { t, i18n } = useTranslation();
  const AppIcons = [
    { icon: <FacebookIcon width={18} /> }, { icon: <TwitterIcon /> }, { icon: <WhatsAppIcon /> }, { icon: <InstagramIcon /> }, { icon: <YouTubeIcon /> },
  ]

  return (
    <div className={`${i18n.language === 'fa' ? 'left-7' : 'right-7'}  Box-shadow1 p-5 h-fit bg-white rounded-lg border border-neutral-300 ${detailVariant?.[variant]}`}>
      {/* price Info */}
      <div className="bg-purpleCustom px-4 py-3 w-52 shadow-[0_0_10px_1px_rgba(13,9,99,0.36)] text-white rounded-lg">
        <h1 className="text-xs">{t(priceInfoVariant?.[variant])}:</h1>
        <h2 className="text-2xl font-semibold w-fit"><span className="float-left mx-1">{i18n.language === 'fa' ? 'ریال' : '$'}</span>{price}</h2>
      </div>
      {/* details Information*/}
      <div className="my-2">
        <h1 >{t(detailInfoVariant?.[variant])}:</h1>
        {Detail.map((item, index) => (
          <div key={index} className="w-full py-2 flex items-center border-b">
            <item.iconDetail width={17} height={17} />
            <div className="w-full text-sm">
              <span className="float-start mx-3 text-gray-600 ">{t(item.titleDetail)}</span>
              <span className="float-end text-gray-400 ">{item.countDetail}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="max-md:flex max-sm:block justify-evenly mt-0">
        {/* Payment Box */}
        <div className="border-b py-2 pb-4 ">
          <h1 className="text-sm">{t('Payment')}</h1>
          <img src="../images/payment.png" alt="Payment Icon" className="h-6 mt-2" />
        </div>
        {/* Share Box */}
        <div className="border-b py-4">
          <h1 className="text-sm">{t('ShareCourse')}</h1>
          <div>
            {AppIcons.map((item, index) => (
              <div key={index} className="inline-flex mx-1 mt-2 bg-slate-200 p-1.5 rounded-full hover:scale-125 duration-200 cursor-pointer">{item.icon}</div>
            ))}
          </div>
        </div>
      </div>
      <Button arrowColor={arrowColor} variant={colorButton} text={btnText} style="mb-2 mt-6 border-2 border-black" />
    </div>
  )
}

export default DetailsBox