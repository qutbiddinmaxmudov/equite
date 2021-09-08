import * as yup from 'yup';

export const FormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Некорректный электронный адрес')
    .required('Почта обязательна'),
  password: yup
    .string()
    .required('Пароль обязателен')
    .min(6, 'Длина пароля должна быть не меньше 6'),
});
