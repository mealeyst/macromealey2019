import { createGlobalStyle, css } from 'styled-components'
import { default as colors } from './colors'
import { default as fonts } from './typography'

import RalewayBold from './Raleway/Raleway-Bold.ttf'
import RalewayBoldItalic from './Raleway/Raleway-BoldItalic.ttf'
import RalewayItalic from './Raleway/Raleway-Italic.ttf'
import RalewayLight from './Raleway/Raleway-Light.ttf'
import RalewayLightItalic from './Raleway/Raleway-LightItalic.ttf'
import RalewayMedium from './Raleway/Raleway-Medium.ttf'
import RalewayMediumItalic from './Raleway/Raleway-MediumItalic.ttf'
import RalewayRegular from './Raleway/Raleway-Regular.ttf'

import RobotoSlabBold from './Roboto_Slab/RobotoSlab-Bold.ttf'
import RobotoSlabLight from './Roboto_Slab/RobotoSlab-Light.ttf'
import RobotoSlabRegular from './Roboto_Slab/RobotoSlab-Regular.ttf'
import RobotoSlabThin from './Roboto_Slab/RobotoSlab-Thin.ttf'

const fontFaces = {
  Raleway: [
    { url: RalewayBold, weight: 600, style: 'normal'},
    { url: RalewayBoldItalic, weight: 600, style: 'normal'},
    { url: RalewayItalic, weight: 400, style: 'italic'},
    { url: RalewayLight, weight: 200, style: 'normal'},
    { url: RalewayLightItalic, weight: 200, style: 'italic'},
    { url: RalewayMedium, weight: 700, style: 'normal'},
    { url: RalewayMediumItalic, weight: 700, style: 'italic'},
    { url: RalewayRegular, weight: 200, style: 'normal'}
  ],
  'Roboto Slab': [
    { url: RobotoSlabBold, weight: 600, style: 'normal' },
    { url: RobotoSlabLight, weight: 200, style: 'normal' },
    { url: RobotoSlabRegular, weight: 400, style: 'normal' },
    { url: RobotoSlabThin, weight: 100, style: 'normal' }
  ]
}

const fontFaceBuilder = (name, {url, weight, style}) =>  {
  return css`
    @font-face {
      font-family: "${name}";
      src: local("${window.location.href}${url}");
      font-style: ${style};
      font-weight: ${weight};
    }
  `
}

const buildFontFaces = () => {
  return Object.keys(fontFaces).map((name) => {
    return fontFaces[name].map((details) => {
      return fontFaceBuilder(name, details);
    })
  })
}


export default {
  colors: colors,
  fonts: fonts
}

const MacroGlobalStyles = createGlobalStyle`
  ${buildFontFaces()}
  * {
    box-sizing: border-box;
    color: ${colors.black};
    ${fonts.robotoSlab}
  }
  body {
    margin: 0;
  }
`

export {
  MacroGlobalStyles
}
