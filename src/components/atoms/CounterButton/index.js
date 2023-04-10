import React, { useState } from 'react'
import { Box } from '../Box'
import { ButtonCounterContainer, CardText } from './styles'
import { Icon } from '../Icon'

export const CounterButton = ({
  onPress,
  value,
  increment,
  decrement,
  ...props
}) => {
  //let [counter, setCounter] = useState(0)

  // const increment = () => {
  //   const newCounter = (counter += 1)
  //   setCounter(newCounter)
  //   props.setPrice(newCounter)
  // }
  // const decrement = () => {
  //   const newCounter = (counter -= 1)
  //   setCounter(newCounter)
  //   props.setPrice(newCounter)
  // }
  //console.log(value)
  return (
    <Box flexDir="row" align="center" justify="space-between">
      <Box
        justify="space-between"
        flexDir="row"
        borderColor="primary"
        mt={6}
        bw={1}
        br={6}
        h={27}
        w={78}>
        <ButtonCounterContainer
          onPress={() => decrement()}
          disabled={value < 1}>
          <Icon
            name="SUBTRACT"
            color={value === 0 ? 'grey' : 'primary'}
            size={16}
          />
        </ButtonCounterContainer>
        <CardText>{value || 0}</CardText>
        <ButtonCounterContainer onPress={() => increment()}>
          <Icon name="ADD" color="primary" size={16} />
        </ButtonCounterContainer>
      </Box>
    </Box>
  )
}

// import { ButtonCounterContainer, CardText } from './styles'
// import { Icon } from '../Icon'

// export const CounterButton = ({ number }) => {
//   return (
//     <Box flexDir="row" align="center" justify="space-between">
//       <Box
//         justify="space-between"
//         flexDir="row"
//         borderColor="primary"
//         mt={6}
//         bw={1}
//         br={6}
//         h={27}
//         w={78}>
//         <ButtonCounterContainer>
//           <Icon name="SUBTRACT" color="grey" size={16} />
//         </ButtonCounterContainer>
//         <CardText>1</CardText>
//         <ButtonCounterContainer>
//           <Icon name="ADD" color="primary" size={16} />
//         </ButtonCounterContainer>
//       </Box>
//       <CardText font="bold">R$ 13,00</CardText>
//     </Box>
//   )
// }
