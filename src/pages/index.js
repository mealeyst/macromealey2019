import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Work from './Work'

export default () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/work" component={Work} />
      </div>
    </Router>
  )
}
