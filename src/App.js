import React from 'react'
import PropTypes from 'prop-types'
import Routes from './pages'
import MacroTheme from './atoms/theme'

const App = ({...props}) => {
  console.log(props)
  return (
    <MacroTheme>
      <Routes />
    </MacroTheme>
  )
}

App.propTypes = {

}

export default App
