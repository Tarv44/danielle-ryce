import React, {useState} from 'react';
import styles from './CSDropdown.module.css';

import DropDownBorder from '../DropDownBorder';
import {
  AiFillCaretDown as DownCaret,
  AiFillCaretUp as UpCaret,
} from 'react-icons/ai'

const Dropdown = (props) => {
  const [open, setOpen] = useState(false)
  const caret = open 
    ? <UpCaret onClick={() => setOpen(false)}/>
    : <DownCaret onClick={() => setOpen(true)}/>
  const annoying = props.annoying.map((a, i) => <li key={i}>{a}</li>)
  const needs = props.needs.map((n, i) => <li key={i}>{n}</li>)
  return (
    <div className={styles.dropdown}> 
      <DropDownBorder top={true} />
      <h3 style={open ? {top: 'auto', marginBottom: 8} : null}>So, what did all this tell me? {caret}</h3>
      <div className={`${styles.content} ${open && styles.openContent}`}>
        <div>
          <h4>What's Annoying</h4>
          <ul style={{maxWidth: props.ulWidth}}>
            {annoying}
          </ul>
        </div>
        <div>
          <h4>What they need</h4>
          <ul style={{maxWidth: props.ulWidth}}>
            {needs}
          </ul>
        </div>
      </div>
      <DropDownBorder />
    </div>
  )
}

export default Dropdown;