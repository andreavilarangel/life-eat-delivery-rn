import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { Box } from '~/components/atoms/Box'
import { FormPayment } from '~/components/molecules/Cards/FormPayment'
import { paymentCardList } from './settings'
import { SelectedFood } from '~/components/molecules/Cards/SelectedFood'
//import { listFood } from './settings'
import { formatCurrency } from '~/utils'
import { WhereToDeliverCard } from '~/components/molecules/Cards/WhereToDeliver'
//import { locationList } from './settings'
import { clientStore } from '~/services/store/client'
import { Map } from '~/assets/images/backgrounds'

export const ShoppingCart = ({ navigation }) => {
  //const [selected, setSelected] = useState()
  const { selectedList, address, paymentCard, setPaymentCard } = clientStore()

  const handlePaymentSubmit = paymentCard => {
    setPaymentCard(paymentCard)
    navigation.navigate('MyRequest')
  }

  const getTotal = () => {
    let total = 0
    selectedList.map(item => (total = total + item.value * item.quantity))
    return total
  }

  return (
    <Screen
      header={{
        title: 'Carrinho de compras',
      }}
      finalButton={{
        btMb: 70,
        text: 'Finalizar pedido',
        onPress: pg => handlePaymentSubmit(pg),
        bg: 'primary',
      }}>
      <Box
        width="100%"
        flexDirection="row"
        align="center"
        justify="space-between"
        mb={16}>
        <Text.SectionTitle>Itens escolhidos</Text.SectionTitle>
        <Text.Link onPress={() => navigation.navigate('Home')} color="primary">
          Alterar
        </Text.Link>
      </Box>
      <Box>
        {selectedList.map(item => (
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
          {paymentCardList.map(item => (
            <FormPayment
              onPress={() => setPaymentCard(item.title)}
              selected={paymentCard === item.title}
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
        <WhereToDeliverCard
          image_url={Map}
          title={`${address.street}, ${address.number}`}
          address={`${address.district}, ${address.city}, ${address.state} `}
          cep={address.cep}
        />
      </Box>
    </Screen>
  )
}
