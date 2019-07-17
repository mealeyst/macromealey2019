import { css } from 'styled-components'

export default (style = 'normal') => {
  const styles = {
    'thin': css`font-weight: 200;`,
    'normal': css`font-weight: 400;`,
    'bold': css`font-weight: 600;`,
    'black': css`font-weight: 700;`
  }
  try {
    const output = styles[style]
    if (output) {
      return output;
    } else {
      throw new Error(`Font weight is not defined`)
    }
  } catch (err) {
    console.warn(`It looks like you tried to supply a font-weight of ${style} that isn't part of the style-guide!`)
  }
}
