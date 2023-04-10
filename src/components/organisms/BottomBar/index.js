import React, { useCallback } from 'react'
import { NavigationHelpersContext, TabActions } from '@react-navigation/native'

import { Touchable } from '~/components/atoms/Touchable'
import { Box } from '~/components/atoms/Box'
import { Icon } from '~/components/atoms/Icon'
import { BarContentContainer } from './styles'

export const BottomBar = ({
  initialRouteName,
  children,
  screenOptions,
  navigation,
  type,
  ...props
}) => {
  const { state } = props

  const admin = [
    {
      icon: 'ORDERS',
      index: 0,
    },
    {
      icon: 'PRODUCTS',
      index: 1,
    },
    {
      icon: 'HISTORIC',
      index: 2,
    },
    {
      icon: 'PROFILE',
      index: 3,
    },
  ]

  const client = [
    {
      icon: 'PRODUCTS',
      index: 0,
    },
    {
      icon: 'CART',
      index: 1,
      onPress: () => navigation.navigate('OrderItem', { screen: 'OrderItem' }),
    },
    {
      icon: 'HISTORIC',
      index: 2,
    },
    {
      icon: 'PROFILE',
      index: 3,
    },
  ]

  const DATA_MENU = {
    admin,
    client,
  }

  const handleNavigate = useCallback(
    route => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route?.key,
        canPreventDefault: true,
      })

      if (!event.defaultPrevented) {
        navigation.dispatch({
          ...TabActions.jumpTo(route?.name),
          target: state?.key,
        })
      }
    },

    [navigation, state.key],
  )

  return (
    <NavigationHelpersContext.Provider value={navigation}>
      <BarContentContainer client={type === 'client'} alingItens="center">
        {DATA_MENU[type].map((route, index) => {
          const { routes } = state
          const selected = state.index === route.index
          return (
            <Touchable
              w={52}
              key={index}
              justifyContent="center"
              onPress={() =>
                props?.onPress || handleNavigate(routes[route.index])
              }>
              <Box w="100%" align="center">
                <Icon
                  size={20}
                  name={route.icon}
                  selected={selected}
                  color={selected ? 'primary' : 'white'}
                  opacity={selected ? 1 : 0.7}
                />
              </Box>
            </Touchable>
          )
        })}
      </BarContentContainer>
    </NavigationHelpersContext.Provider>
  )
}
