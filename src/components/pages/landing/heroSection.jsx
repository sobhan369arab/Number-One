import { BlueButton, ImportantWord } from "../../common"
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    const typeWriterOptions = {
        autoStart: true,
        loop: true,
        wrapperClassName: "text-2xl",
        cursorClassName: "text-2xl"
    }
    return (
        <div className="w-full h-[420px] flex items-center bg-heroSection bg-cover lg:px-44 sm:px-16 px-8">
            <div className="w-1/2 xl:w-1/3 h-fit flex flex-wrap leading-10 text-2xl">
                <div className="flex h-fit gap-x-3 items-end">
                    <h1 className='font-bold'>هرگز از</h1>
                    <ImportantWord isExplosion={true}>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('یادگیری')
                                    .pauseFor(1000)
                                    .deleteChars(7)
                                    .typeString('تلاش')
                                    .pauseFor(1000)
                                    .deleteChars(4)
                                    .typeString('استقامت')
                                    .pauseFor(1000)
                                    .deleteChars(7)
                                    .start();
                            }}
                            options={typeWriterOptions}
                        />
                    </ImportantWord>
                </div>
                <h1 className='font-bold'>دست نکشید زندگی هرگز از آموزش دست نمی کشد</h1>
                <p className='w-full text-base text-neutral-500'>هر سفر آموزشی و یادگیری دنبال کردن منحصر به فرد است ما به شما کمک خواهیم کرد</p>
                <BlueButton text="رایگان آزمایش کنید" Class="mt-10 text-white bg-purpleCustom h-fit" ArrowColor="#fff" />
            </div>
        </div>
    )
}

export default HeroSection