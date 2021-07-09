import React, {useState,useEffect} from 'react';

const DropDownBorder = ({top}) => {
  const [width, setWidth] = useState(Math.floor(Math.floor(window.innerWidth)*.5))
  const path = top 
  ? '42V2H2V42' 
  : '2V42H2V2'

  useEffect(() => {
    const handleResize = () => {
      setWidth((Math.floor(Math.floor(window.innerWidth)*.5)))
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <svg width={`${width}`} height="46" viewBox={`0 0 ${width} 42`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={`M${width-2} ${path}`} stroke="#2285C5" stroke-width="3"/>
    </svg>
  )
}

export default DropDownBorder;