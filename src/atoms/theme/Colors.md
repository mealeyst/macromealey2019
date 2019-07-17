```js
  const colors = require('./colors').default;
  const ColorSwatch = require('./colors').ColorSwatch;
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }}>
  {
    Object.keys(colors).map((name) => {
    return (
      <ColorSwatch name={name} color={colors[name]} />
    )
  })}
  </div>
```
