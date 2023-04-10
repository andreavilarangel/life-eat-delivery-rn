import React, { useState, useEffect } from 'react'
import { Text } from '~/components/atoms/Text'
import { Box } from '~/components/atoms/Box'
import { FoodImage } from './styles'
import { CounterButton } from '~/components/atoms/CounterButton'
import { formatCurrency } from '~/utils'
import { clientStore } from '~/services/store/client'

export const FoodOptionCard = ({
  selected,
  title,
  description,
  value,
  item,
  ...props
}) => {
  const [price, setPrice] = useState(props?.value || 0)
  const { onCounter, selectedList } = clientStore()

  useEffect(() => {
    function addItemMenu() {
      //RECEBER QUAL É O VALOR DO PRODUTO
      const newValue = selectedList.find(a => a?.id === props.id)?.value

      //LOCALIZAR - FIND - QUAL A QUANTIDADE DO PRODUTO
      const newQuant = selectedList.find(
        list => list?.id === props.id,
      )?.quantity
      const valorTotal = newValue * newQuant

      //SETAR O VALOR TOTAL - ATUAL
      setPrice(valorTotal || 0)
      return valorTotal || 0
    }
    addItemMenu()
    //SUBSTITUIR PELO VALUE * PRICE
  }, [props])

  return (
    <Box
      {...props}
      baseWidth
      br={8}
      p={16}
      bw={1}
      borderColor="primary"
      flexDir="row">
      <FoodImage img={props?.image_url} />
      <Box ml={12} w={220}>
        <Text.CardText font="bold">{title}</Text.CardText>
        <Text.SubText>{description}</Text.SubText>
        <Box flexDir="row" align="center" justify="space-between">
          <CounterButton
            setPrice={setPrice}
            increment={() => onCounter('increment', item)}
            decrement={() => onCounter('decrement', item)}
            value={
              selectedList.find(list => list?.id === props.id)?.quantity || 0
            }
          />
          {value && (
            <Text.CardText font="bold">{formatCurrency(price)}</Text.CardText>
          )}
        </Box>
      </Box>
    </Box>
  )
}
