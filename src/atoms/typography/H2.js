import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../theme/'

const H2 = styled.h2`
  color: ${props => props.color};
  ${props => props.family}
  ${props => props.fontStyle}
  ${props => props.fontSizes.mobile}
  ${props => props.theme.breakpoints.aboveLaptop`
    ${props => props.fontSizes.desktop}
  `}
  font-weight: ${props => props.weight};
`

H2.propTypes = {
  color: PropTypes.string,
  family: PropTypes.array,
  fontSizes: PropTypes.shape({
    mobile: PropTypes.array,
    desktop: PropTypes.array
  }),
  fontStyle: PropTypes.array,
  weight: PropTypes.number
}

H2.defaultProps = {
  color: theme.colors.black,
  family: theme.fonts.raleway,
  fontSizes: {
    mobile: theme.fontSize('20px'),
    desktop: theme.fontSize('24px')
  },
  fontStyle: theme.fontStyle(),
  weight: 500
}

/** @component */
export default H2
