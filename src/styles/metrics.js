import { Dimensions, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')

const wp = widthPercent => {
  const screenWidth = Dimensions.get('window').width
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  )
}

const hp = heightPercent => {
  const screenHeight = Dimensions.get('window').height
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  )
}

const figmaWidth = 375

const px = valuePx => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenWidth = Dimensions.get('window').width
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  )
}

const paddingSizes = {
  none: 0,
  tiny: px(8),
  little: px(10),
  smaller: px(12),
  small: px(14),
  medium: px(16),
  large: px(18),
  larger: px(20),
  big: px(24),
  mega: px(32),
}

const handlePadding = value => {
  if (!value) {
    return 0
  }
  if (paddingSizes.hasOwnProperty(value)) {
    return paddingSizes[value]
  }
  return px(value)
}

export const handleBorderRadius = br => {
  if (!br) {
    return 0
  }

  if (br === 'small' || 'default') {
    return 8
  }

  if (br === 'medium') {
    return 12
  }

  if (br === 'big') {
    return 16
  }

  return px(br)
}

export const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  wp,
  hp,
  px,
  paddingSizes,
  basePadding: `${px(20)}px`,
  baseWidth: `${px(375)}px`,
  handlePadding,
  handleBorderRadius,
}
