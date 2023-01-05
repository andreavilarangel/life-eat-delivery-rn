import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'accessKey',
    placeholder: 'Chave de acesso',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'newPassword',
    placeholder: 'Nova senha',
    returnKeyType: 'send',
    icon: false,
    secureText: true,
  },
  {
    inputType: 'box',
    field: 'confirmPassword',
    placeholder: 'Confirmar senha',
    returnKeyType: 'send',
    icon: false,
    secureText: true,
  },
]

export const validationSchema = Yup.object().shape({
  accessKey: Yup.string().required('Digite o código'),
  newPassword: Yup.string().required('Informe sua nova senha'),
  confirmPassword: Yup.string().required('Confirme sua nova senha'),
})

export const initialValues = {
  accessKey: '',
  newPassword: '',
  confirmPassword: '',
}
