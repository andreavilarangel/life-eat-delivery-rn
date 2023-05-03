import React, { useState } from 'react'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

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
              selected={item.date === selectedFilter}
              onPress={() => setSelectedFilter(item.date)}
              mr={4}
              day={format(parseISO(item.date), 'dd')}
              week={format(parseISO(item.date), 'iiiiii', { locale: pt })}
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
        data: awaitingListFood.filter(
          listDay => listDay.date === selectedFilter,
        ),
        renderItem: item => <RequestsCard mt={16} key={item.id} {...item} />,
      }}
      listHeader={listHeader}
    />
  )
}
