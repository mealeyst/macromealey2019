import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme/'

const H3 = styled.h3`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontStyle}
  ${props => props.fontSizes.mobile}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  ${props => props.fontWeight};
`

H3.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  fontWeight: PropTypes.array
}

H3.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('18px'),
    desktop: theme.fontSize('20px')
  },
  fontStyle: theme.fontStyle(),
  fontWeight: theme.fontWeight('bold')
}

/** @component */
export default H3
