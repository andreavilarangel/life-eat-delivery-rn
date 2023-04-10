import React, { useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { Box } from '~/components/atoms/Box'
import { Button } from '~/components/atoms/Button'
import { Icon } from '~/components/atoms/Icon'
import { Loader } from '~/components/atoms/Loader'
import { Text } from '~/components/atoms/Text'
import { Avatar } from '~/components/atoms/Avatar'
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
      setLoading(false)
      return
    }
    const params = {
      ...payload,
      ...props?.payload,
    }
    try {
      await action(params)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const renderList = () => {
    if (props?.list?.data?.length > 0) {
      const { data, renderItem } = props?.list
      return (
        <Box>
          {data?.map((item, index) => renderItem(item, index))}
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

  const header = () => {
    const { onBack, onAdd, title, subtitle, withAvatar } = props?.header
    return (
      <Box
        bbw={1}
        borderColor="grey"
        p={20}
        pt={10}
        fullWidth
        justify="space-between"
        align="center"
        flexDir="row">
        <Box flexDir="row" align="center">
          {onBack && (
            <Icon
              onPress={() => navigation.goBack()}
              name={'ARROW_LEFT'}
              color="primary"
              size={24}
              mr={16}
            />
          )}
          <Box w={onAdd ? 260 : 'auto'}>
            {title && <Text.ModalTitle>{title}</Text.ModalTitle>}
            {subtitle && <Text.CardTitle>{subtitle}</Text.CardTitle>}
          </Box>
        </Box>
        {onAdd && (
          <Icon onPress={onAdd} name={'ADD_CIRCLE'} color="primary" size={30} />
        )}
        {withAvatar && <Avatar />}
      </Box>
    )
  }

  const handleList = () => {
    if (props?.loading) {
      return <Loader />
    }
    if (props?.form) {
      return (
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
      )
    }
    if (props?.list) {
      return (
        <Box {...props?.listProps} mt={16}>
          {renderList()}
        </Box>
      )
    }
  }
  return (
    <S.Container>
      {props?.bgImg && (
        <S.BackgroundImg {...props?.bgImgProps} source={props?.bgImg} />
      )}
      {props?.header && header()}
      {props?.outOfScrollUp && props?.outOfScrollUp()}
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
        {props?.listHeader && props?.listHeader()}
        {handleList()}
        {props?.listFooter && props?.listFooter()}
        {children}
      </S.KeyboardScroll>
      {props?.outOfScrollDown && props?.outOfScrollDown()}
      {props?.finalButton && (
        <S.BackgroundGradient btMb={props?.finalButton?.btMb}>
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
