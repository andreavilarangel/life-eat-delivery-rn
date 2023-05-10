import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { Icon } from '~/components/atoms/Icon'
import { Screen } from '~/components/molecules/Screen'
import { listFood } from './settings'
import { SelectedFood } from '~/components/molecules/Cards/SelectedFood'
import { WhereToDeliverCard } from '~/components/molecules/Cards/WhereToDeliver'
import { MethodPaymentCard } from '~/components/molecules/Cards/MethodPaymentCard'
import { ClientCard } from '~/components/molecules/Cards/ClientCard'

export const OrderDetails = ({ navigation, route }) => {
  const { item } = route.params
  return (
    <Screen
      finalButton={{
        text: 'Confirmar produto',
        onPress: () => navigation.navigate('AddProduct'),
      }}
      header={{
        onBack: true,
        title: 'Detalhes do pedido',
      }}>
      <Text.CardTitle mt={16} font="bold">
        Pedido Nº {item?.order}
      </Text.CardTitle>
      <Box flexDir="row" align="center">
        <Icon mr={8} color="orange" size={14} name="timer" />
        <Text.CardTitle color="orange">
          {item?.status === 'awaiting'
            ? 'Aguardando confirmação'
            : 'Pedido confirmado'}
        </Text.CardTitle>
      </Box>
      <Text.CardText mb={16}>Pedido realizado dia: {item?.date}</Text.CardText>
      <Text.SectionTitle font="bold">Cliente</Text.SectionTitle>

      <Box mb={16} mt={16}>
        <ClientCard {...item.client} />
      </Box>
      <Text.SectionTitle font="bold">Itens do pedido</Text.SectionTitle>

      {listFood.map(list => (
        <SelectedFood
          title={list.title}
          quantity={list.quantity}
          key={list.id}
        />
      ))}
      <Text.SectionTitle font="bold" mt={24} mb={16}>
        Forma de pagamento
      </Text.SectionTitle>
      <MethodPaymentCard title="Pix" />
      <Box />
      <Text.SectionTitle font="bold" mt={24} mb={16}>
        Endereço de entrega
      </Text.SectionTitle>
      <WhereToDeliverCard {...item.address} />
    </Screen>
  )
}
