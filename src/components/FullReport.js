import React from 'react';

const FullReport = ({url}) => {
  const divStyle = {
    background: 'var(--color-bg-blue)',
    display: 'inline-block',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 0
  }
  const pStyle = {
    margin: 0,
    fontSize: 18
  }
  return (
    <div style={divStyle}>
      <p style={pStyle}>What else did I uncover? For a full report, go <a href={url}><u>here</u></a>.</p>
    </div>
  )
}

export default FullReport;