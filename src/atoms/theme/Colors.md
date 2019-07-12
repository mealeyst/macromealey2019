```js
  const colors = require('./colors').default;
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }}>
  {
    Object.keys(colors).map((name) => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
      }}>
        <div style={{
          backgroundColor: colors[name],
          width: '7.5rem',
          height: '7.5rem',
          borderRadius: '0.7rem',
          boxShadow: '0.1rem 0.1rem rgba(0,0,0,0.3)',
          marginBottom: '0.5rem'
        }}></div>
        <span style={{textAlign: 'center'}}>{name.toUpperCase()}</span>
      </div>
    )
  })}
  </div>
```
