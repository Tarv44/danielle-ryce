import React from 'react';

const PrototypeLink = ({url}) => {
  const style = {
    background: 'var(--color-bg-grey)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'inline-block',
    borderRadius: 0,
  }
  return (
    <div style={style}>
      <p style={{margin: 0, fontSize: 18}}>Open the prototype in a new window <u><a target="_blank" rel="noreferrer" href={url}>here</a></u>.</p>
    </div>
  )
}

export default PrototypeLink;