import React, { useState } from 'react'
import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { RequestsCard } from '~/components/molecules/Cards/Requests'
import { HorizontalFilterCalendarCard } from '~/components/molecules/Cards/HorizontalFilterCalendar'
import { awaitingListFood, calendars } from './settings'
import { HorizontalCalendar } from '~/components/molecules/HorizontalCalendar'

export const Home = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null)
  const listHeader = () => {
    return (
      <>
        <Text.SectionTitle mt={24} mb={16}>
          Próximos pedidos
        </Text.SectionTitle>
        <HorizontalCalendar
          data={calendars}
          renderItem={({ item }) => (
            <HorizontalFilterCalendarCard
              selected={item.id === selectedFilter}
              onPress={() => setSelectedFilter(item.id)}
              mr={4}
              day={item.day}
              week={item.week}
            />
          )}
        />
      </>
    )
  }
  return (
    <Screen
      header={{
        title: 'Olá, Lucas!',
        subtitle: '24 de janeiro de 2023',
        withAvatar: true,
      }}
      list={{
        data: awaitingListFood,
        renderItem: item => (
          <RequestsCard
            onPress={() => navigation.navigate('OrderDetails', item)}
            mt={16}
            key={item.id}
            {...item}
          />
        ),
      }}
      listHeader={listHeader}
    />
  )
}
