import React from 'react'

import { FlatList } from 'react-native'
import { metrics } from '~/styles'
import { Box } from '~/components/atoms/Box'

export const HorizontalList = ({
  renderItem,
  data,
  selected,
  onChangeSelectedDate,
  type,
  ...props
}) => {
  return (
    <Box {...props}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: metrics.px(20),
          paddingLeft: metrics.px(20),
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexGrow: 0,
          width: metrics.wp(100),
          marginLeft: -metrics.px(20),
        }}
      />
    </Box>
  )
}
