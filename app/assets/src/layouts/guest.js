import React from 'react'
import { Link } from 'react-router5'

import './application.sass'

const Guest = () =>
  <ul className='pure-menu-list'>
    <li className='pure-menu-item'>
      <Link routeName='auth.sign_in' className='pure-menu-link' styleName='links'>
        Sign In
      </Link>
    </li>
  </ul>

export default Guest
