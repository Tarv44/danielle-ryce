import React from 'react';

const WireframeLink = ({url}) => {
  const style = {
    background: 'var(--color-bg-blue)',
    display: 'inline-block',
    paddingLeft: 20,
    paddingRight: 20
  }
  return (
    <div style={style}>
      <p>Want to admire all my hard work? For all wireframes, go <u><a target="_blank" rel="noreferrer" href={url}>here</a></u>.</p>
    </div>
  )
}

export default WireframeLink;