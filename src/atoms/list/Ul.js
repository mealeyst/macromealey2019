import PropTypes from 'prop-types'
import styled from 'styled-components'

const Ul = styled.ul`
  display: ${props => props.display};
  list-style: ${props => props.listStyle};
`

Ul.propTypes = {
  display: PropTypes.string,
  listStyle: PropTypes.string
}

Ul.defaultProps = {
  display: 'block',
  listStyle: 'list'
}

/** @component */
export default Ul
