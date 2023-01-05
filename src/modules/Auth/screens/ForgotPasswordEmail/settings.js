import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'email',
    placeholder: 'E-mail',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
]

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Informe seu email'),
})

export const initialValues = {
  email: '',
}
