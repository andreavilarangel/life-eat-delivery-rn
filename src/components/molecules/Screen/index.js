import React, { useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { Box } from '~/components/atoms/Box'
import { Button } from '~/components/atoms/Button'
import { Icon } from '~/components/atoms/Icon'
import { Loader } from '~/components/atoms/Loader'
import { Text } from '~/components/atoms/Text'
import { Form } from '../Form'
import { authStore } from '~/services/store/auth'

import * as S from './styles'

export const Screen = ({ children, ...props }) => {
  const { navigation } = authStore()
  const [formIsValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [payload, setPayload] = useState(props?.form?.initialValues || {})

  const handleSubmit = async action => {
    setLoading(true)
    if (props?.form && !formIsValid) {
      showMessage({
        message: 'Erro ao realizar esta ação',
        description: 'Por favor, tente novamente',
        type: 'danger',
      })
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
  const renderList = () => {
    if (props?.list?.length > 0) {
      return (
        <Box>
          {props?.list?.map((item, index) => props?.renderItem(item, index))}
          {loadingMore && <Loader />}
        </Box>
      )
    }
    if (props?.emptyList?.text && !props?.loading) {
      return (
        <Box w={335} align="center" mt={12} mb={12}>
          <Icon name={props?.emptyList?.icon || 'search'} color="grey" mb={6} />
          <Text.SubText align="center" mt={4} color="grey" w={180}>
            {props?.emptyList?.text}
          </Text.SubText>
        </Box>
      )
    }
    return (
      <Box>{props?.emptyList && !props?.loading && props?.emptyList()}</Box>
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

  const onLoadMore = async () => {
    setLoadingMore(true)
    await props?.onLoadMore()
    setTimeout(() => setLoadingMore(false), 1000)
  }
  return (
    <S.Container>
      {props?.bgImg && (
        <S.BackgroundImg {...props?.bgImgProps} source={props?.bgImg} />
      )}
      {props?.customHeader && (
        <S.CustomHeaderContainer>
          {props?.customHeader()}
        </S.CustomHeaderContainer>
      )}
      {props?.outOfScroll && props?.outOfScroll()}
      <S.KeyboardScroll
        onScroll={(e, i) => {
          let paddingToBottom = 120
          if (
            e.nativeEvent.layoutMeasurement.height +
              e.nativeEvent.contentOffset.y >=
            e.nativeEvent.contentSize.height - paddingToBottom
          ) {
            if (props?.onLoadMore && !loadingMore) {
              onLoadMore()
            }
          }
        }}
        {...props}>
        {(props?.withBack || props?.onBack || props?.onAdd || props?.title) && (
          <Box
            pl={!!props?.align ? 20 : 0}
            pr={20}
            fullWidth
            justify="space-between"
            flexDir="row">
            {(!!props?.onBack || !!props?.withBack) && (
              <Icon
                onPress={props?.onBack || (() => navigation?.goBack())}
                name={'ARROW_LEFT'}
                color="white"
                size={24}
                mb={16}
              />
            )}
          </Box>
        )}
        <Box flexDir="row" justify="space-between" w={335} align="center">
          {props?.title && (
            <Text.ScreenTitle w={props?.onAdd ? 190 : 'auto'}>
              {props?.title}
            </Text.ScreenTitle>
          )}
          {props?.onAdd && (
            <S.SmallButton onPress={props?.onAdd?.onPress}>
              <Text.SubText color="black" defaultFont="semiBold">
                {props?.onAdd?.text}
              </Text.SubText>
            </S.SmallButton>
          )}
          {props?.titleRenderButton && props?.titleRenderButton()}
        </Box>
        {props?.listHeader && props?.listHeader()}
        {props?.loading && <Loader />}
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
            {renderList()}
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
              props?.finalButton?.loading ||
              loading ||
              (props?.form && !formIsValid)
            }>
            {props?.finalButton?.text || 'Salvar'}
          </Button>
        </S.BackgroundGradient>
      )}
    </S.Container>
  )
}
