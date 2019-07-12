import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { Canvas } from '../atoms'
console.log(Canvas)

const Home = styled((props) => {
  console.log(props)
  return (
    <section>
      <Canvas />
    </section>
  )
})`

`

Home.propTypes = {

}

export default withTheme(Home)
