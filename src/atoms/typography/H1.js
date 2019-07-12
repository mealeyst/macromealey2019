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
  font-weight: ${props => props.weight};
`

H1.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  weight: PropTypes.number
}

H1.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('24px'),
    desktop: theme.fontSize('32px')
  },
  fontStyle: theme.fontStyle(),
  weight: 500
}

/** @component */
export default H1
