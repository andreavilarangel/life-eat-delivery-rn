//https://github.com/bhrott/react-native-masked-text
import React, { useState } from 'react'
import { Box } from '~/components/atoms/Box'
import { Icon } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'
import { Touchable } from '~/components/atoms/Touchable'

import * as S from './styles'

export const Input = props => {
  const [security, setSecurity] = useState(props?.secureText)
  const [focus, setFocus] = useState(false)

  const label = () => {
    if (props?.label) {
      return (
        <Text.SubText
          color={props?.editable ? 'primary' : 'primary'}
          mb={props?.inputType === 'box' || props?.textArea ? 8 : 0}>
          {props?.label}
        </Text.SubText>
      )
    }
    return <></>
  }

  const error = () => {
    if (props?.error) {
      return (
        <Text.SubText mt={2} color="error">
          {props?.error}
        </Text.SubText>
      )
    }
    return <></>
  }

  const InputText = props?.masked
    ? S.MaskedInput
    : props?.textArea
    ? S.InputTextArea
    : S.InputText

  return (
    <Box {...props}>
      {label()}
      <S.Container {...props} focus={focus}>
        {!!props?.icon && <Icon mr={12} name={props?.icon} size={16} />}
        <InputText
          {...props}
          onFocus={() => setFocus(true)}
          onEndEditing={() => setFocus(false)}
          secureTextEntry={security}
          placeholder={props?.placeholder}
        />
        {props?.secureText && (
          <Touchable>
            <Icon
              onPress={() => setSecurity(!security)}
              name={security ? 'EYE_OPEN' : 'EYE_CLOSED'}
              size={18}
              ml={12}
            />
          </Touchable>
        )}
      </S.Container>
      {error()}
    </Box>
  )
}
