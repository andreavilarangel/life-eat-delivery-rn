import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { Box } from '~/components/atoms/Box'
import { inputs, validationSchema, initialValues } from './settings'
import { Avatar } from '~/components/atoms/Avatar'
import { WhereToDeliverCard } from '~/components/molecules/Cards/WhereToDeliver'
import { locationList } from './settings'
import { clientStore } from '~/services/store/client'

export const Profile = () => {
  const { setProfile } = clientStore()

  const handleProfileSubmit = profile => {
    setProfile(profile)
  }
  const listHeader = () => {
    return (
      <>
        <Box w="100%" align="center">
          <Avatar size="profile" mt={20} label="Alterar foto" />
        </Box>
        <Box
          width="100%"
          flexDirection="row"
          align="center"
          justify="space-between"
          mt={24}
          mb={16}>
          <Text.SectionTitle>Dados pessoais</Text.SectionTitle>
          <Text.Link onPress={() => {}} color="primary">
            Alterar
          </Text.Link>
        </Box>
      </>
    )
  }

  return (
    <Screen
      header={{
        title: 'Perfil',
      }}
      form={{
        data: inputs,
        validationSchema,
        initialValues,
      }}
      finalButton={{
        btMb: 70,
        text: 'Salvar',
        onPress: p => handleProfileSubmit(p),
        bg: 'primary',
      }}
      listHeader={listHeader}>
      <Box
        width="100%"
        flexDirection="row"
        align="center"
        justify="space-between"
        mt={24}
        mb={16}>
        <Text.SectionTitle>Endereço</Text.SectionTitle>
        <Text.Link onPress={() => {}} color="primary">
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
