import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme/'

const B = styled.span`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontStyle}
  ${props => props.fontSizes.mobile}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  ${props => props.fontWeight};
`

B.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  fontWeight: PropTypes.number
}

B.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.robotoSlab,
  fontSizes: {
    mobile: theme.fontSize('14px'),
    desktop: theme.fontSize('16px')
  },
  fontStyle: theme.fontStyle(),
  fontWeight: theme.fontWeight('bold')
}

/** @component */
export default B
