import * as Yup from 'yup'
export const inputs = [
  {
    inputType: 'box',
    field: 'title',
    placeholder: 'Título',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'description',
    placeholder: 'Descrição',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
  {
    inputType: 'box',
    field: 'value',
    keyboardType: 'phone-pad',
    placeholder: 'Valor',
    autoCorrect: false,
    autoCapitalize: 'none',
    returnKeyType: 'next',
  },
  {
    inputType: 'box',
    field: 'ingredient',
    placeholder: 'Ingrediente',
    returnKeyType: 'send',
    icon: false,
    secureText: false,
  },
]

export const validationSchema = Yup.object().shape({
  title: Yup.string().required('Informe seu nome completo'),
  description: Yup.string().required('Informe seu número de celular'),
  value: Yup.string().required('Informe seu email'),
  ingredient: Yup.string().required('Informe sua senha'),
})

export const initialValues = {
  title: '',
  description: '',
  value: '',
  ingredient: '',
}

import styled from 'styled-components/native'
export const FoodImage = styled.Image.attrs(({ src, resizeMode }) => ({
  source: src,
  resizeMode: resizeMode || 'contain',
}))`
  align-self: center;
  width: ${({ theme }) => theme.px(120)}px;
  height: ${({ theme }) => theme.px(120)}px;
  border-radius: ${({ theme }) => theme.px(8)}px;
`
