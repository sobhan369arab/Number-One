import * as yup from "yup";

export const ChangePasswordWithToken = yup.object().shape({
  currentPassword: yup.string().required("این فیلد الزامیست!"),
  password: yup
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
    .oneOf([yup.ref("password")], "این فیلد باید با رمز عبور یکسان باشد!"),
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
  email: yup
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
  verificationCode: yup.number().required("این فیلد الزامیست!").typeError("لطفا کد را به درستی وارد کنید")
});

export const getPhoneNumber = yup.object().shape({
  phoneNumber: yup.number().required("این فیلد الزامیست!").min(9000000000, "شماره موبایل را درست وارد کنید").max(9999999999, "شماره موبایل را درست وارد کنید"),
});