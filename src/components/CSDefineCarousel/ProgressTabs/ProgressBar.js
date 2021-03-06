import React, {useState, useEffect} from 'react';

const ProgressBar = ({index, setIndex, reduce}) => {
  const breakPoint = 1200
  const [five, setFive] = useState(window.innerWidth > breakPoint || !reduce)
  const [width, setWidth] = useState(window.innerWidth * .7)
  
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth*.7
      setFive(window.innerWidth > breakPoint || !reduce )
      setWidth(newWidth)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [reduce]);

  return (
    <svg width={width} height="15" viewBox={`0 0 ${width} 15`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M7 8H${width-8}`} stroke="#BABABA"/>
      <circle onClick={() => setIndex(0)} cx="9" cy="7.5" r="7" fill={index === 0 ? "#585799" : "white"} stroke="#585799"/>
      <circle onClick={() => setIndex(1)} cx={five ? width*.25 : width*.33} cy="7.5" r="7" fill={index === 1 ? "#585799" : "white"} stroke="#585799"/>
      {five && <circle onClick={() => setIndex(2)} cx={width/2} cy="7.5" r="7" fill={index === 2 ? "#585799" : "white"} stroke="#585799"/>}
      <circle onClick={() => setIndex(five ? 3 : 2)} cx={five ? width*.75 : width*.66} cy="7.5" r="7" fill={(five && index === 3) || (!five && index === 2) ? "#585799" :  "white"} stroke="#585799"/>
      <circle onClick={() => setIndex(five ? 4 : 3)} cx={width-9} cy="7.5" r="7" fill={(five && index === 4) || (!five && index === 3) ? "#585799" : "white"} stroke="#585799"/>
    </svg>

  )
}

export default ProgressBar;