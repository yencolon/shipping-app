import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nombre es requerido')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),

  email: yup.string().required('Correo electrónico es requerido').email('Correo inválido'),

  password: yup
    .string()
    .required('Contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),

  confirmPassword: yup
    .string()
    .required('Confirmar contraseña es requerido')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),

  phone: yup
    .string()
    .required('Teléfono es requerido')
    .matches(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Teléfono inválido'),
});

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;
export default registerSchema;
