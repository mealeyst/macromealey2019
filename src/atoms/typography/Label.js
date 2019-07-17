import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../theme/'

const Label = styled.label`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontStyle}
  ${props => props.fontSizes.mobile}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  ${props => props.fontWeight};
`

Label.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  fontWeight: PropTypes.number
}

Label.defaultProps = {
  color: theme.colors.greySky,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('14px'),
    desktop: theme.fontSize('16px')
  },
  fontStyle: theme.fontStyle('normal'),
  fontWeight: theme.fontWeight()
}

/** @component */
export default Label
