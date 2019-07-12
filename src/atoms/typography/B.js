import PropTypes from 'prop-types'
import styled from 'styled-components'

const B = styled.span`
  font-weight: ${props => props.weight};
  ${props => props.theme.fonts.robotoSlab};
`

B.propTypes = {
  weight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

B.defaultProps = {
  weight: 600
}

/** @component */
export default B
