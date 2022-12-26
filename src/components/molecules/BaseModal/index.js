import React, { useState } from 'react'
import { Icon } from '~/components/atoms/Icon'
import { Text } from '~/components/atoms/Text'
import { Button } from '~/components/atoms/Button'
import { Loader } from '~/components/atoms/Loader'
import { Box } from '~/components/atoms/Box'
import { Form } from '~/components/molecules/Form'
import { showMessage } from 'react-native-flash-message'

import * as S from './styles'

export const BaseModal = ({
  children,
  onClose,
  onBack,
  title,
  onAdd,
  ...props
}) => {
  const [formIsValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [payload, setPayload] = useState(props?.form?.initialValues || {})

  const handleSubmit = async action => {
    setLoading(true)
    if (props?.form && props?.validationSchema && !formIsValid) {
      showMessage({
        message: 'Erro ao realizar esta ação',
        description: 'Por favor, tente novamente',
        type: 'danger',
      })
      setLoading(false)
      return
    }
    const params = {
      ...payload,
      ...props?.payload,
    }
    try {
      await action({ params })
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const RenderList = () => {
    if (!props?.list.length && props?.emptyList) {
      return <Box>{props?.emptyList()}</Box>
    }
    return (
      <Box flexDir={props?.listStyle}>
        {props?.list?.map((item, index) => props?.renderItem(item, index))}
      </Box>
    )
  }

  const formButtonOptions = () => {
    if (props?.form?.formButton) {
      return {
        formButton: {
          ...props?.form?.formButton,
          loading: props?.form?.formButton?.loading || loading,
          onPress: () => handleSubmit(props?.form?.formButton?.onPress),
        },
      }
    }
    return {}
  }

  return (
    <S.BackgroundModal>
      <S.ContainerModal h={props?.h}>
        {props?.bgImg && (
          <S.BackgroundImg {...props?.bgImgProps} source={props?.bgImg} />
        )}
        {(onClose || onBack || onAdd || title) && (
          <S.ModalHeader>
            <Icon
              name="ARROW_LEFT"
              color={!onBack ? 'transparent' : 'white'}
              size={25}
              onPress={onBack}
            />
            {title && (
              <Text.ModalTitle
                align="center"
                w={!onBack ? 270 : 250}
                mr={8}
                justifyContent="center">
                {title}
              </Text.ModalTitle>
            )}
            <Icon
              name="CLOSE"
              color={!onClose ? 'transparent' : 'white'}
              size={18}
              onPress={onClose}
            />
            {onAdd && (
              <Box
                ml={props?.mlOnAdd}
                bg="primary"
                w={30}
                h={30}
                br={6}
                align="center"
                justify="center">
                <Icon
                  name="PLUS_PRIMARY"
                  color={!onAdd ? 'transparent' : 'black'}
                  size={24}
                  onPress={onAdd}
                />
              </Box>
            )}
          </S.ModalHeader>
        )}
        {props?.customHeader && props?.customHeader()}
        {props?.outOfScroll && props?.outOfScroll()}
        <S.KeyboardScroll scroll={false}>
          {props?.loading && <Loader />}
          {props?.listHeader && props?.listHeader()}
          {props?.form && (
            <Form
              {...props?.form}
              {...formButtonOptions()}
              data={props?.form?.data}
              initialValues={props?.form?.initialValues}
              validationSchema={props?.form?.validationSchema}
              getValues={(values, isValid) => {
                setPayload(values)
                setIsValid(isValid)
                props?.form?.getValues && props?.form?.getValues(values)
              }}
            />
          )}
          {props?.list && (
            <Box {...props?.listProps} mt={16}>
              <RenderList />
            </Box>
          )}
          {props?.listFooter && props?.listFooter()}
          {children}
        </S.KeyboardScroll>
        {props?.outOfScrollDown && props?.outOfScrollDown()}
        {props?.finalButton && (
          <S.BackgroundGradient>
            <Button
              {...props?.finalButton}
              loading={props?.finalButton?.loading || loading}
              onPress={() => handleSubmit(props?.finalButton?.onPress)}
              disabled={
                props?.finalButton?.disabled ||
                loading ||
                (props?.form && props?.form?.validationSchema && !formIsValid)
              }>
              {props?.finalButton?.text || 'Salvar'}
            </Button>
          </S.BackgroundGradient>
        )}
      </S.ContainerModal>
    </S.BackgroundModal>
  )
}
