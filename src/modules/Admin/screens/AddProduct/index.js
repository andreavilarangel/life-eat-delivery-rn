import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { Box } from '~/components/atoms/Box'
import { inputs, validationSchema, initialValues } from './settings'
import { FoodImage } from './settings'
import { Marmita } from '~/assets/images/backgrounds'
import { BackgroundGradient, BackgroundImg } from './styles'

export const AddProduct = ({ ...props }) => {
  const listHeader = () => {
    return (
      <>
        <BackgroundImg source={Marmita} />
        <BackgroundGradient>
          <Box w="100%" align="center" mt={40}>
            <FoodImage src={Marmita} />
            <Text.Link mt={6} color="primary">
              Alterar foto
            </Text.Link>
          </Box>
        </BackgroundGradient>
      </>
    )
  }

  return (
    <Screen
      header={{
        onBack: true,
        title: 'Adicionar produto',
      }}
      form={{
        data: inputs,
        validationSchema,
        initialValues,
        formButton: {
          onPress: null,
          text: 'Excluir produto',
          variant: 'outline',
        },
      }}
      finalButton={{
        text: 'Salvar',
        onPress: null,
        bg: 'primary',
      }}
      listHeader={listHeader}
    />
  )
}
