import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme/'

const H4 = styled.h4`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontStyle}
  ${props => props.fontSizes.mobile}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  ${props => props.fontWeight};
`

H4.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  fontWeight: PropTypes.array
}

H4.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('16px'),
    desktop: theme.fontSize('18px')
  },
  fontStyle: theme.fontStyle(),
  fontWeight: theme.fontStyle('bold')
}

/** @component */
export default H4
