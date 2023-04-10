import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'user',
    masked: true,
    type: 'cel-phone',
    options: {
      maskType: 'BRL',
      withDDD: true,
      dddMask: '(99) ',
    },
    placeholder: 'Celular',
    autoCorrect: false,
    autoCapitalize: 'none',
    returnKeyType: 'next',
    icon: 'user',
  },
  {
    inputType: 'box',
    field: 'password',
    placeholder: 'Senha',
    returnKeyType: 'send',
    icon: 'lock',
    secureText: true,
  },
]

export const validationSchema = Yup.object().shape({
  user: Yup.string().required('Informe seu número de celular'),
  password: Yup.string().required('Informe sua senha'),
})

export const initialValues = {
  user: '',
  password: '',
}
