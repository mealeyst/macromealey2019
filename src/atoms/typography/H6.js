import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme/'

const H6 = styled.h6`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontStyle}
  ${props => props.fontSizes.mobile}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  font-weight: ${props => props.weight};
`

H6.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  weight: PropTypes.number
}

H6.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('12px'),
    desktop: theme.fontSize('14px')
  },
  fontStyle: theme.fontStyle('italic'),
  weight: 500
}

/** @component */
export default H6
