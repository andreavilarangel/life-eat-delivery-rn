import { Marmita } from '~/assets/images/backgrounds'

const foodList = [
  {
    id: 10,
    title: 'Escondidinho Batata com frango',
    description: 'Feito com batata inglesa e carne moída',
    value: 13,
    image_url: Marmita,
  },
  {
    id: 20,
    title: 'Escondidinho Batata e Frango',
    description: 'Feito com batata inglesa e peito frango',
    value: 13,
    image_url: Marmita,
  },
  {
    id: 30,
    title: 'Escondidinho Baroa e Carne',
    description: 'Feito com batata baroa e carne moída',
    value: 13,
    image_url: Marmita,
  },
  {
    id: 40,
    title: 'Escondidinho Fitness',
    description: 'Feito com batata baroa e carne moída',
    value: 13,
    image_url: Marmita,
  },
  {
    id: 50,
    title: 'Escondidinho Massa e Carne',
    description: 'Feito com batata baroa e carne moída',
    value: 13,
    image_url: Marmita,
  },
]

const pancakeList = [
  {
    id: 11,
    title: 'Panqueca Batata com frango',
    description: 'Feito com batata inglesa e carne moída',
    value: 10,
    image_url: Marmita,
  },
  {
    id: 21,
    title: 'Panqueca Batata e Frango',
    description: 'Feito com batata inglesa e peito frango',
    value: 10,
    image_url: Marmita,
  },
  {
    id: 31,
    title: 'Panqueca Baroa e Carne',
    description: 'Feito com batata baroa e carne moída',
    value: 10,
    image_url: Marmita,
  },
  {
    id: 41,
    title: 'Panqueca Fitness',
    description: 'Feito com batata baroa e carne moída',
    value: 10,
    image_url: Marmita,
  },
  {
    id: 51,
    title: 'Panqueca Massa e Carne',
    description: 'Feito com batata baroa e carne moída',
    value: 10,
    image_url: Marmita,
  },
]

const snackList = [
  {
    id: 12,
    title: 'Prato do dia',
    description: 'Arroz branco, feijão, Salada, Bife de frango',
    value: 18,
    image_url: Marmita,
  },
  {
    id: 22,
    title: 'Frango à passarinho',
    description: 'Arroz branco, Tropeiro, salada, 100gr frango',
    value: 18,
    image_url: Marmita,
  },
  {
    id: 32,
    title: 'Peito de frango grelhado',
    description: 'Arroz branco, Feijão fradinho, salada, 150gr peito de frango',
    value: 18,
    image_url: Marmita,
  },
  {
    id: 42,
    title: 'Filé à parmegiana',
    description: 'Arroz branco, Feijão fradinho, salada, 150gr filé',
    value: 10,
    image_url: Marmita,
  },
  {
    id: 52,
    title: 'Linquiça suína ',
    description: 'Arroz branco, salada, legumes',
    value: 18,
    image_url: Marmita,
  },
]

const pastaList = [
  {
    id: 13,
    title: 'Lasanha de frango',
    description: 'Salada, legumes grelhado com azeite',
    value: 21,
    image_url: Marmita,
  },
  {
    id: 23,
    title: 'Lasanha de frango ao molho branco',
    description: 'Salada, legumes grelhado com azeite',
    value: 21,
    image_url: Marmita,
  },
  {
    id: 33,
    title: 'Lasanha à bolhonesa',
    description: 'Salada, legumes grelhado com azeite',
    value: 21,
    image_url: Marmita,
  },
  {
    id: 43,
    title: 'Nhoque com camarão',
    description: 'Salada, legumes grelhado com azeite',
    value: 21,
    image_url: Marmita,
  },
]

const fitnessList = [
  {
    id: 14,
    title: 'Picadinho com molho madeira',
    description: 'Salada, legumes grelhado com azeite',
    value: 25,
    image_url: Marmita,
  },
  {
    id: 24,
    title: 'Purê de mandioquinha',
    description: 'Salada, legumes grelhado com azeite',
    value: 25,
    image_url: Marmita,
  },
  {
    id: 34,
    title: 'Ratatue de berinjela',
    description: 'Salada, legumes grelhado com azeite',
    value: 25,
    image_url: Marmita,
  },
  {
    id: 44,
    title: 'Frango com curry',
    description: 'Salada, legumes grelhado com azeite',
    value: 25,
    image_url: Marmita,
  },
  {
    id: 54,
    title: 'Almondegas de carne',
    description: 'Salada, legumes grelhado com azeite',
    value: 25,
    image_url: Marmita,
  },
]
export const filters = [
  {
    id: 1,
    text: 'Escondidinho',
    data: foodList,
  },
  {
    id: 2,
    text: 'Panqueca',
    data: pancakeList,
  },
  {
    id: 3,
    text: 'Refeições',
    data: snackList,
  },
  {
    id: 4,
    text: 'Massas',
    data: pastaList,
  },
  {
    id: 5,
    text: 'Fitness',
    data: fitnessList,
  },
]
