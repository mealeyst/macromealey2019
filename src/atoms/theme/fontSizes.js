import { css } from 'styled-components'

export default (size = '16px') => {
  const sizes = {
    '12px': css`font-size: 1.2rem;`,
    '14px': css`font-size: 1.4rem;`,
    '16px': css`font-size: 1.6rem;`,
    '18px': css`font-size: 1.8rem;`,
    '20px': css`font-size: 2rem;`,
    '24px': css`font-size: 2.4rem;`,
    '32px': css`font-size: 3.2rem;`,
    '48px': css`font-size: 4.8rem;`
  }
  try {
    const output = sizes[size]
    if (output) {
      return output;
    } else {
      throw new Error(`Font size is not defined`)
    }
  } catch (err) {
    console.warn(`It looks like you tried to supply a font-size of ${size} that isn't part of the style-guide!`)
  }
}
