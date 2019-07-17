const path = require('path')

module.exports = {
  components: 'src/**/*.{js,jsx,ts,tsx}',
  ignore: [
    'src/App.js',
    'src/**/index.js',
    'src/**/*.base.{js,jsx,ts,tsx}',
    'src/**/*.test.{js,jsx,ts,tsx}'
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/atoms/theme')
  }
}
