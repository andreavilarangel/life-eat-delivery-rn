import React from 'react'
import { Container, Text, Animation } from './styles'

export const Loader = ({ text, size, ...props }) => (
  <Container {...props}>
    <Animation
      autoPlay
      loop
      source={require('~/assets/animations/loader.json')}
      size={size}
      resizeMode="contain"
    />
    {text && (
      <Text size={size} mt={4}>
        {text}
      </Text>
    )}
  </Container>
)
