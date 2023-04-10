import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'cep',
    masked: true,
    type: 'zip-code',
    placeholder: 'CEP',
    autoCorrect: false,
    autoCapitalize: 'none',
    returnKeyType: 'next',
  },
  {
    inputType: 'box',
    field: 'street',
    placeholder: 'Rua',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'number',
    keyboardType: 'phone-pad',
    placeholder: 'Número',
    autoCorrect: false,
    autoCapitalize: 'none',
    returnKeyType: 'next',
  },
  {
    inputType: 'box',
    field: 'complement',
    placeholder: 'Complemento',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'district',
    placeholder: 'Bairro',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'city',
    placeholder: 'Cidade',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'state',
    placeholder: 'Estado',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
]

export const validationSchema = Yup.object().shape({
  cep: Yup.number().required('Informe seu CEP'),
  street: Yup.string().required('Informe o nome da sua rua'),
  number: Yup.number().required('Informe o número'),
  complement: Yup.string().required('Informe o complemento'),
  district: Yup.string().required('Informe o seu bairro'),
  city: Yup.string().required('Informe sua cidade'),
  state: Yup.string().required('Informe o seu estado'),
})

export const initialValues = {
  cep: '',
  street: '',
  number: '',
  complement: '',
  district: '',
  city: '',
  state: '',
}
