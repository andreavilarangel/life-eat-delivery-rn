import React from 'react'
import PropTypes from 'prop-types'
import { Touchable } from '../Touchable'
import { BaseText } from './styles'
import {
  sizePropsTypes,
  colorPropsTypes,
  marginPropsTypes,
  paddingPropsTypes,
} from '~/styles/styled-system'

export const Text = ({ children, ...props }) => (
  <BaseText {...props}>{children}</BaseText>
)

Text.ScreenTitle = ({ children, ...props }) => (
  <BaseText fontSize={24} defaultFont="extraBold" letterSpacing={3} {...props}>
    {children}
  </BaseText>
)

Text.ModalTitle = ({ children, ...props }) => (
  <BaseText fontSize={20} defaultFont="bold" letterSpacing={1.8} {...props}>
    {children}
  </BaseText>
)

Text.SectionTitle = ({ children, ...props }) => (
  <BaseText fontSize={18} defaultFont="semiBold" letterSpacing={1.8} {...props}>
    {children}
  </BaseText>
)

Text.CardTitle = ({ children, ...props }) => (
  <BaseText fontSize={16} defaultFont="semiBold" letterSpacing={1.6} {...props}>
    {children}
  </BaseText>
)

Text.CardText = ({ children, ...props }) => (
  <BaseText fontSize={14} defaultFont="medium" letterSpacing={1.4} {...props}>
    {children}
  </BaseText>
)

Text.SubText = ({ children, ...props }) => (
  <BaseText fontSize={12} defaultFont="medium" letterSpacing={1.2} {...props}>
    {children}
  </BaseText>
)

Text.TinyText = ({ children, ...props }) => (
  <BaseText fontSize={10} defaultFont="medium" letterSpacing={1} {...props}>
    {children}
  </BaseText>
)

Text.Link = ({ children, ...props }) => (
  <Touchable flexDir="row" {...props}>
    <BaseText
      color={props?.color || 'white'}
      fontSize={props?.fontSize || 14}
      letterSpacing={1}
      {...props}>
      {children}
      {props?.primaryText && (
        <BaseText
          color={props?.color || 'primary'}
          fontSize={props?.fontSize || 14}>
          {` ${props?.primaryText}`}
        </BaseText>
      )}
    </BaseText>
  </Touchable>
)

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.func,
  ]),
  ...sizePropsTypes,
  ...colorPropsTypes,
  ...marginPropsTypes,
  ...paddingPropsTypes,
}
