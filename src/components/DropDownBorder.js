import React, {useState,useEffect, useContext} from 'react';
import MobileContext from '../mobile.context';

const DropDownBorder = ({top}) => {
  const {isMobile} = useContext(MobileContext)
  const [width, setWidth] = useState(!isMobile ? Math.floor(Math.floor(window.innerWidth)*.5) : Math.floor(Math.floor(window.innerWidth)*.8))
  const [height, setHeight] = useState(window.innerWidth < 526 ? 23 : 42)
  const path = top 
  ? `42V2H2V42`
  : '2V42H2V2'

  useEffect(() => {
    const handleResize = () => {
      setWidth(!isMobile ? Math.floor(Math.floor(window.innerWidth)*.5) : Math.floor(Math.floor(window.innerWidth)*.8))
      setHeight(window.innerWidth < 526 ? 23 : 42)
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