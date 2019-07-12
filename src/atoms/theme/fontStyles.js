import { css } from 'styled-components'

export default (style = 'normal') => {
  const styles = {
    'normal': css`font-style: normal;`,
    'italic': css`font-style: italic;`
  }
  try {
    const output = styles[style]
    if (output) {
      return output;
    } else {
      throw new Error(`Font style is not defined`)
    }
  } catch (err) {
    console.warn(`It looks like you tried to supply a font-style of ${style} that isn't part of the style-guide!`)
  }
}
