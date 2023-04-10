import React from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { LocationImage } from './styles'

export const WhereToDeliverCard = ({
  selected,
  title,
  address,
  cep,
  ...props
}) => {
  // console.log(props.image_url)
  return (
    <Box
      {...props}
      baseWidth
      br={8}
      p={8}
      bw={1}
      borderColor="primary"
      flexDir="row">
      <LocationImage src={props?.image_url} />
      <Box w={335} ml={16}>
        <Text.CardText font="bold">{title}</Text.CardText>
        <Text.SubText>{address}</Text.SubText>
        <Text.SubText>CEP {cep}</Text.SubText>
      </Box>
    </Box>
  )
}

// import React from 'react'
// import { Image } from 'react-native'
// import { Text } from '~/components/atoms/Text'
// import { Box } from '~/components/atoms/Box'

// export const WhereToDeliverCard = ({ title, description, ...props }) => {
//   return (
//     <Box
//       {...props}
//       baseWidth
//       br={8}
//       p={8}
//       bw={1}
//       mb={44}
//       align="center"
//       borderColor="primary"
//       flexDir="row">
//       <Box flexDir="row" ml={12} w={335} h={64}>
//         <Image
//           style={{ width: 50, height: 50, marginRight: 16, marginTop: 8 }}
//           source={require('~/assets/images/map.png')}
//         />
//         <Box>
//           <Text.CardText font="bold">Av. Getúlio Vargas, 1671</Text.CardText>
//           <Text.SubText>Funcionários, Belo Horizonte/MG</Text.SubText>
//           <Text.SubText>CEP 30112-021</Text.SubText>
//         </Box>
//       </Box>
//     </Box>
//   )
// }
