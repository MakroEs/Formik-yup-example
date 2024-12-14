import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli email adresi giriniz")
    .required("Email adresi zorunlu!"),
  age: yup
    .number()
    .positive("Pozitif bir değer giriniz")
    .required("Lütfen yaşınızı giriniz!"),
  password: yup.string().required("Şifre giriniz!"),
  confirmPassword: yup
    .string()
    .required("Şifre alanı zorunlu !")
    .oneOf(
      [yup.ref("password", yup.password)],
      "Şifreler eşleşmiyor lütfen tekrar giriniz!"
    ),
  term: yup.boolean().required("Lütfen kutucuğu onaylayınız ! "),
});
