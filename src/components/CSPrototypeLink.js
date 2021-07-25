import React, { useContext } from 'react';
import MobileContext from '../mobile.context';

const PrototypeLink = ({url}) => {
  const {isMobile} = useContext(MobileContext)
  const style = {
    background: 'var(--color-bg-grey)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'inline-block',
    borderRadius: 0,
    marginBottom: isMobile ? 100 : 150
  }
  return (
    <div style={style}>
      <p style={{margin: 0, fontSize: isMobile ? 14 : 18}}>Open the prototype in a new window <u><a target="_blank" rel="noreferrer" href={url}>here</a></u>.</p>
    </div>
  )
}

export default PrototypeLink;