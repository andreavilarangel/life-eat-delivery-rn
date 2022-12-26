import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'user',
    autoCorrect: false,
    autoCapitalize: 'none',
    returnKeyType: 'next',
    icon: 'person',
  },
  {
    inputType: 'box',
    field: 'password',
    placeholder: 'password',
    returnKeyType: 'send',
    icon: 'lock',
    secureText: true,
  },
]

export const validationSchema = Yup.object().shape({
  user: Yup.string().required('required.user'),
  password: Yup.string().required('required.password'),
})

export const initialValues = {
  user: '',
  password: '',
}
