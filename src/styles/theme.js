import { colors } from './colors'
import { metrics } from './metrics'
import { fonts } from './fonts'

export const theme = {
  colors,
  fonts,
  metrics,
  ...fonts,
  ...metrics,
  ...colors,
}
