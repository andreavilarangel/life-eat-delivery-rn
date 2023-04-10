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
  },
]

export const validationSchema = Yup.object().shape({
  user: Yup.string().required('Informe seu número de celular'),
})

export const initialValues = {
  user: '',
}
