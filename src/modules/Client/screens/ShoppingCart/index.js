import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { Box } from '~/components/atoms/Box'
import { FormPayment } from '~/components/molecules/Cards/FormPayment'
import { paymentCard } from './settings'
import { SelectedFood } from '~/components/molecules/Cards/SelectedFood'
import { listFood } from './settings'
import { formatCurrency } from '~/utils'
import { WhereToDeliverCard } from '~/components/molecules/Cards/WhereToDeliver'
import { locationList } from './settings'

export const ShoppingCart = ({ navigation }) => {
  const [selected, setSelected] = useState()

  const getTotal = () => {
    let total = 0
    listFood.map(item => (total = total + item.value * item.quantity))
    return total
  }

  return (
    <Screen
      header={{
        title: 'Carrinho de compras',
      }}
      finalButton={{
        text: 'Finalizar pedido',
        onPress: null,
        bg: 'primary',
      }}>
      <Box
        width="100%"
        flexDirection="row"
        align="center"
        justify="space-between"
        mb={16}>
        <Text.SectionTitle>Itens escolhidos</Text.SectionTitle>
        <Text.Link
          onPress={() => navigation.navigate('OrderItems')}
          color="primary">
          Alterar
        </Text.Link>
      </Box>
      <Box>
        {listFood.map(item => (
          <SelectedFood
            title={item.title}
            quantity={item.quantity}
            key={item.id}
          />
        ))}
      </Box>
      <Box
        mt={30}
        width="100%"
        flexDirection="row"
        align="center"
        justify="space-between"
        borderColor="primary"
        bbw={1}
        btw={1}
        pv={10}>
        <Text.ModalTitle>Total</Text.ModalTitle>
        <Text.ModalTitle>{formatCurrency(getTotal())}</Text.ModalTitle>
      </Box>
      <Box mt={30} width="100%" align="flex-start">
        <Text.SectionTitle>Forma de pagamento</Text.SectionTitle>
        <Box flexDirection="row">
          {paymentCard.map(item => (
            <FormPayment
              onPress={() => setSelected(item.id)}
              selected={selected === item.id}
              title={item.title}
              icon={item.icon}
              key={item.id}
            />
          ))}
        </Box>
      </Box>
      <Box
        width="100%"
        flexDirection="row"
        align="center"
        justify="space-between"
        mt={24}
        mb={16}>
        <Text.SectionTitle>Endereço de entrega</Text.SectionTitle>
        <Text.Link
          onPress={() => navigation.navigate('DeliveryAddress')}
          color="primary">
          Alterar
        </Text.Link>
      </Box>
      <Box flexDirection="row">
        {locationList.map(item => (
          <WhereToDeliverCard
            image_url={item.image_url}
            title={item.title}
            address={item.address}
            cep={item.cep}
            key={item.id}
          />
        ))}
      </Box>
    </Screen>
  )
}
