import React from 'react'
import { Provider } from 'mobx-react'
import Pages from '../pages'

import Guest from './guest'

import './application.sass'

class Application extends React.Component {
  guestOrMember() {
    const { user } = this.props

    if (false) return <Member />
    return <Guest />
  }

  render() {    
    return (
      <Provider {...this.props}>
        <div id='Application'>
          <div className='pure-menu pure-menu-horizontal pure-g' styleName='main_nav'>
            <div className='pure-u-2-24'>
              <a href='#' className='pure-menu-heading' styleName='heading'>Invoiced</a>
            </div>
            <div className='pure-u-18-24'>
            </div>
            <div className='pure-u-4-24 right'>
              {this.guestOrMember()}
            </div>
          </div>
          <Pages />
        </div>
      </Provider>
    )
  }
}

export default Application
