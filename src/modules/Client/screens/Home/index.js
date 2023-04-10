import React, { useState } from 'react'

import { Text } from '~/components/atoms/Text'
import { Screen } from '~/components/molecules/Screen'
import { HorizontalList } from '~/components/molecules/HorizontalList'
import { HorizontalFilterCard } from '~/components/molecules/Cards/HorizontalFilter'
import { FoodOptionCard } from '~/components/molecules/Cards/FoodOption'

import { filters } from './settings'

export const Home = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState(null)
  const [currentList, setCurrentList] = useState(filters[0].data)

  const listHeader = () => {
    return (
      <>
        <Text.ScreenTitle mb={16}>Cardápio</Text.ScreenTitle>
        <HorizontalList
          data={filters}
          renderItem={({ item }) => (
            <HorizontalFilterCard
              selected={item.id === selectedFilter}
              onPress={() => {
                setSelectedFilter(item.id)
                setCurrentList(item.data)
              }}
              mr={4}
              mb={24}
              text={item.text}
            />
          )}
        />
      </>
    )
  }
  return (
    <Screen
      header={{
        title: 'Olá, Gabriel!',
        subtitle: 'Seja bem-vindo novamente',
        withAvatar: true,
      }}
      list={{
        data: currentList,
        renderItem: function (item) {
          return <FoodOptionCard mb={12} {...item} item={item} />
        },
      }}
      listHeader={listHeader}
    />
  )
}

// import React, { useState } from 'react'

// import { Text } from '~/components/atoms/Text'
// import { Screen } from '~/components/molecules/Screen'
// import { HorizontalList } from '~/components/molecules/HorizontalList'
// import { HorizontalFilterCard } from '~/components/molecules/Cards/HorizontalFilter'
// import { FoodOptionCard } from '~/components/molecules/Cards/FoodOption'

// import { filters, foodList } from './settings'

// export const Home = ({ navigation }) => {
//   const [selectedFilter, setSelectedFilter] = useState(null)

//   const listHeader = () => {
//     return (
//       <>
//         <Text.ScreenTitle mb={16}>Cardápio</Text.ScreenTitle>
//         <HorizontalList
//           data={filters}
//           renderItem={({ item }) => (
//             <HorizontalFilterCard
//               selected={item.id === selectedFilter}
//               onPress={() => setSelectedFilter(item.id)}
//               mr={4}
//               mb={24}
//               text={item.text}
//             />
//           )}
//         />
//       </>
//     )
//   }
//   return (
//     <Screen
//       header={{
//         title: 'Olá, Gabriel!',
//         subtitle: 'Seja bem-vindo novamente',
//         withAvatar: true,
//       }}
//       list={{
//         data: foodList,
//         renderItem: item => (
//           <FoodOptionCard
//             onPress={() => navigation.navigate('OrderItems', item)}
//             mb={12}
//             {...item}
//           />
//         ),
//       }}
//       listHeader={listHeader}
//     />
//   )
// }
