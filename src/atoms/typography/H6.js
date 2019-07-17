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
  ${props => props.fontWeight};
`

H6.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  fontWeight: PropTypes.array
}

H6.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('12px'),
    desktop: theme.fontSize('14px')
  },
  fontStyle: theme.fontStyle('italic'),
  fontWeight: theme.fontWeight('bold')
}

/** @component */
export default H6
