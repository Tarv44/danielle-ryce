import React from 'react';

const WireframeLink = ({url}) => {
  const style = {
    background: window.innerWidth < 1200 ? 'var(--color-bg-grey)' : 'var(--color-bg-blue)',
    display: 'inline-block',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 55,
    marginRight: 55,
    borderRadius: 0,
    fontSize: window.innerWidth < 525 ? 14 : 18,
    textAlign: 'center'
  }
  return (
    <div style={style}>
      <p>Want to admire all my hard work? For all wireframes, go <u><a target="_blank" rel="noreferrer" href={url}>here</a></u>.</p>
    </div>
  )
}

export default WireframeLink;