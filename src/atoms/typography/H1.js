import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme/'

const H1 = styled.h1`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontSizes.mobile}
  ${props => props.fontStyle}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  ${props => props.fontWeight};
`

H1.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  fontWeight: PropTypes.array
}

H1.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('24px'),
    desktop: theme.fontSize('32px')
  },
  fontStyle: theme.fontStyle(),
  fontWeight: theme.fontWeight('bold')
}

/** @component */
export default H1
