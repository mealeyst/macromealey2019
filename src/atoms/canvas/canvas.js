import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

class BaseCanvas extends Component {
  constructor (props) {
    super(props)
    this.canvas = React.createRef()
  }

  componentDidMount () {
    const { theme } = this.props
    this.canvas.current.width = window.innerWidth
    this.canvas.current.height = window.innerHeight
    const ctx = this.canvas.current.getContext('2d')
    ctx.fillStyle = theme.colors.oxford
    ctx.fillRect(0, 0, this.canvas.current.width, this.canvas.current.height);
    const base_image = new Image();
    base_image.src = 'https://res.cloudinary.com/dp5su6sfg/image/upload/v1506995998/web/engagement_photos_09_30_17-97_o7jn3y.jpg'
    base_image.onload = () => {
      console.log(base_image.width, base_image.height)
      ctx.drawImage(base_image, 0, 0, this.canvas.current.width, this.canvas.current.height)
    }
  }

  render () {
    return (
      <canvas ref={this.canvas}></canvas>
    )
  }
}

const Canvas = withTheme(BaseCanvas)
export { Canvas }
