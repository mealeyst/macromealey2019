import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme, { MacroGlobalStyles } from './theme'

const MacroTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <MacroGlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

MacroTheme.propTypes = {
  children: PropTypes.node
}

export default MacroTheme
export { MacroGlobalStyles }
