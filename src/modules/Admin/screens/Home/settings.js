import { Client } from '~/assets/images/backgrounds'
import { Map } from '~/assets/images/backgrounds'

export const awaitingListFood = [
  {
    id: 1,
    order: 68545,
    status: 'awaiting',
    date: '24/01/2023',
    client: {
      id: 1,
      name: 'Gabriel Messi',
      phone: '(31) 99437-2773',
      email: 'gabriel@lifeeatdelivery.com.br',
      image_url: Client,
    },
    address: {
      id: 1,
      title: 'Av. Getúlio Vargas, 1671',
      address: 'Funcionários, Belo Horizonte/MG',
      cep: '30112-021',
      image_url: Map,
    },
    items: [
      {
        id: 2,
        order: 68224,
        title: 'Escondidinho de Batata e Frango',
        quantity: 1,
        value: 12,
        date: '24/01/2023',
      },
      {
        id: 3,
        order: 68230,
        title: 'Escondidinho de Carne Moída',
        quantity: 2,
        value: 13,
        date: '24/01/2023',
      },
    ],
  },
  {
    id: 2,
    order: 68555,
    date: '26/01/2023',
    status: 'confirmed',
    client: {
      id: 1,
      name: 'Fulano de Tal Messi',
      phone: '(31) 99437-2773',
      email: 'fulano@lifeeatdelivery.com.br',
      image_url: Client,
    },
    address: {
      id: 1,
      title: 'Av. Getúlio Vargas, 2022',
      address: 'Santo Antônio, Belo Horizonte/MG',
      cep: '30112-021',
      image_url: Map,
    },
    items: [
      {
        id: 2,
        order: 68224,
        title: 'Escondidinho de Batata e Frango',
        quantity: 3,
        value: 12,
        date: '10/01/2023',
      },
      {
        id: 3,
        order: 68230,
        title: 'Escondidinho de Carne Moída',
        quantity: 2,
        value: 13,
        date: '10/01/2023',
      },
      {
        id: 5,
        order: 68230,
        title: 'Escondidinho de Carne Moída',
        quantity: 2,
        value: 13,
        date: '10/01/2023',
      },
    ],
  },
  {
    id: 3,
    order: 68560,
    status: 'awaiting',
    date: '24/01/2023',
    client: {
      id: 1,
      name: 'Geraldo Magela Messi',
      phone: '(31) 99437-2773',
      email: 'g.magela@lifeeatdelivery.com.br',
      image_url: Client,
    },
    address: {
      id: 1,
      title: 'Av. Afonso, 1671',
      address: 'Savassi, Belo Horizonte/MG',
      cep: '30112-021',
      image_url: Map,
    },
    items: [
      {
        id: 2,
        order: 68224,
        title: 'Escondidinho de Batata e Frango',
        quantity: 1,

        value: 12,
        date: '10/01/2023',
      },
      {
        id: 3,
        order: 68230,
        title: 'Escondidinho de Carne Moída',
        quantity: 2,
        value: 13,
        date: '10/01/2023',
      },
    ],
  },
]

export const calendars = [
  {
    id: 1,
    day: 21,
    week: 'Seg',
  },
  {
    id: 2,
    day: 22,
    week: 'Ter',
  },
  {
    id: 3,
    day: 23,
    week: 'Qua',
  },
  {
    id: 4,
    day: 24,
    week: 'Qui',
  },
  {
    id: 5,
    day: 25,
    week: 'Sex',
  },
  {
    id: 6,
    day: 26,
    week: 'Sáb',
  },
  {
    id: 7,
    day: 27,
    week: 'Dom',
  },
]
