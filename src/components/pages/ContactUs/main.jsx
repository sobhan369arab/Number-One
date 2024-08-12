import BlueButton from "../../common/BlueButton"

const Field = ({ placeholder }) => {
    return (
        <input className="w-1/3 h-12 border-2 border-GrayBorder outline-none rounded-md px-4" placeholder={placeholder} type="text" name="field" />
    )
}

export const Main = () => {
    const fields = [
        { id: 1, name: "نام *" },
        { id: 1, name: "پست الکترونیک *" },
        { id: 1, name: "سایت اینترنتی *" },
    ]

    return (
        <div className="w-4/6 h-full flex items-center bg-BlueGray border-2 border-GrayBorder rounded-lg p-8">
            <div className="w-full h-fit flex flex-wrap gap-y-4">
                <h1 className="w-full text-3xl font-bold">برای ما پیام ارسال کنید</h1>
                <p className="w-full text-sm text-neutral-500">آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *</p>
                <textarea className="w-full max-h-60 min-h-60 p-4" name="contactUs"></textarea>
                <div className="w-full flex gap-x-4">
                    {fields.map(obj => <Field key={obj.id} placeholder={obj.name} />)}
                </div>
                <BlueButton Class={"border-2 border-black bg-Orange text-black font-bold"} text="ارسال کنید" />
            </div>
        </div>
    )
}