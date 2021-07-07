import React from 'react'
import './Footer.css'
import { Fade } from 'react-reveal'
import { greeting } from '../../portfolio.js'
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div
      className='footer-div footer-text'
      /*style={{ color: props.theme.secondaryText }}*/
    >
      <Fade>
        <h6>Lover of code & coffee ☕</h6>

        <h4>
          &copy; {new Date().getFullYear()} | Made with{' '}
          <span role='img'>❤️</span> by Nithya Shanmugam
        </h4>
        <h6>eat(); sleep(); code(); repeat();</h6>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  )
}
