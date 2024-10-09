import * as yup from "yup";

export const ChangePasswordWithToken = yup.object().shape({
  oldPassword: yup.string().required("این فیلد الزامیست!"),
  newPassword: yup
    .string()
    .required("این فیلد الزامیست!")
    .notOneOf(
      [yup.ref("currentPassword")],
      "این فیلد نباید با رمز عبور قبلی یکسان باشد!"
    )
    .min(3, "رمز عبور باید بیشتر از 3 حرف باشد"),
  repeatPassword: yup
    .string()
    .required("این فیلد الزامیست!")
    .oneOf([yup.ref("newPassword")], "این فیلد باید با رمز عبور یکسان باشد!"),
});

export const EmailValidation = yup.object().shape({
  email: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!"),
});

export const NationalCode = yup.object().shape({
  nationalCode: yup
    .number()
    .typeError("کد مل را به درستی وارد کنید!")
    .integer("کد ملی نمیتواند شامل اعداد اعشاری باشد!")
    .positive("کد ملی باید عددی مثبت باشد!"),
});
export const loginValidations = yup.object().shape({
  phoneOrGmail: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!")
    .required("این فیلد الزامیست!"),
  password: yup
    .string()
    .required("این فیلد الزامیست!")
    .notOneOf(
      [yup.ref("currentPassword")],
      "این فیلد نباید با رمز عبور قبلی یکسان باشد!"
    )
    .min(3, "رمز عبور باید بیشتر از 3 حرف باشد"),
});

export const getCodeValidation = yup.object().shape({
  verifyCode: yup
    .number()
    .required("این فیلد الزامیست!")
    .typeError("لطفا کد را به درستی وارد کنید"),
});

export const getPhoneNumber = yup.object().shape({
  phoneNumber: yup
    .number()
    .required("این فیلد الزامیست!")
    .min(9000000000, "شماره موبایل را درست وارد کنید")
    .max(9999999999, "شماره موبایل را درست وارد کنید"),
});
export const CommentValid = yup.object().shape({
  title: yup
    .string()
    .max(80, "طول نویسه بیش از حد مجاز")
    .required("فیلد نمی تواند خالی باشد"),
  description: yup.string().required("فیلد نمی تواند خالی باشد"),
});

export const ContactValidation = yup.object().shape({
  description: yup.string().required("این فیلد الزامیست!"),
  name: yup.string().required("این فیلد الزامیست!"),
  email: yup
    .string()
    .email("ایمیل را به درستی وارد کنید!")
    .typeError("ایمیل را به درستی وارد کنید!")
    .required("این فیلد الزامیست!"),
  webSite: yup.string().url("آدرس را به درستی وارد کنید!").required("این فیلد الزامیست!"),
});
