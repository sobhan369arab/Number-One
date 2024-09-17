import { useTranslation } from "react-i18next";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  WhatsAppIcon,
  YouTubeIcon
} from "../../core/icon";
import { Button, CreateSocialMediaItems } from ".";

export const detailVariant = {
  "event-detail": "md:absolute top-96",
  "course-detail": "lg:w-64 mb-8",
}
export const detailInfoVariant = {
  "event-detail": "EventInfo",
  "course-detail": "CourseInfo",
  "cart": "cartInfo"
}
export const priceInfoVariant = {
  "event-detail": "EventPrice",
  "course-detail": "CoursePrice",
  "cart": "cartTotalSum"
}

const DetailsBox = ({
  variant,
  price,
  Detail,
  arrowColor,
  colorButton,
  btnText,
  shareBox = true
}) => {
  const { t, i18n } = useTranslation();
  const AppIcons = [
    <FacebookIcon />,
    <TwitterIcon />,
    <WhatsAppIcon />,
    <InstagramIcon />,
    <YouTubeIcon />,
  ]

  return (
    <div className={`${i18n.language === 'fa' ? 'left-7' : 'right-7'}  Box-shadow1 p-5 h-fit bg-white rounded-lg border border-neutral-300 flex flex-wrap justify-center ${detailVariant?.[variant]}`}>
      {/* price Info */}
      <div className="bg-purpleCustom px-4 py-3 w-full min-w-52 shadow-[0_0_10px_1px_rgba(13,9,99,0.36)] text-white rounded-lg flex flex-wrap justify-center gap-y-3">
        <h1 className="text-xs w-full">{t(priceInfoVariant?.[variant])}:</h1>
        <h2 className="text-2xl font-semibold w-fit"><span className="float-left mx-1">{i18n.language === 'fa' ? 'ریال' : '$'}</span>{price}</h2>
      </div>
      {/* details Information*/}
      <div className="my-2 w-full">
        <h1>{t(detailInfoVariant?.[variant])}:</h1>
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
      <div className="w-full max-md:flex max-sm:block justify-evenly mt-0">
        {/* Payment Box */}
        <div className="border-b py-2 pb-4 ">
          <h1 className="text-sm">{t('Payment')}</h1>
          <img src="../images/payment.png" alt="Payment Icon" className="h-6 mt-2" />
        </div>
        {/* Share Box */}
        {shareBox && (
          <div className="border-b py-4">
            <h1 className="text-sm">{t('ShareCourse')}</h1>
            <div className="flex justify-around mt-2">
              {AppIcons.map((item, index) => <CreateSocialMediaItems key={index} Icon={item} style="bg-neutral-200" />)}
            </div>
          </div>
        )}
      </div>
      <Button arrowColor={arrowColor} vType={"button"} vStyle={colorButton} text={btnText} style="mb-2 mt-6 border-2 border-black" />
    </div>
  )
}

export default DetailsBox