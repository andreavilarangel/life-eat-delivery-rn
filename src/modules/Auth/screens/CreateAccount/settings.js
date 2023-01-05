import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'name',
    placeholder: 'Nome',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
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
  },
  {
    inputType: 'box',
    field: 'email',
    placeholder: 'E-mail',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'password',
    placeholder: 'Senha',
    returnKeyType: 'send',
    icon: false,
    secureText: true,
  },
]

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Informe seu nome completo'),
  user: Yup.string().required('Informe seu número de celular'),
  email: Yup.string().required('Informe seu email'),
  password: Yup.string().required('Informe sua senha'),
})

export const initialValues = {
  name: '',
  user: '',
  email: '',
  password: '',
}
