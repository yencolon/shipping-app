import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().required('Correo es requerido').email('Correo inválido'),
  password: yup
    .string()
    .required('Contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
export type LoginSchemaType = yup.InferType<typeof loginSchema>;
export default loginSchema;
