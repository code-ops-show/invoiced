import React from 'react'
import { Provider } from 'mobx-react'
import Pages from '../pages'

import './application.sass'

class Application extends React.Component {
  render() {    
    return (
      <Provider {...this.props}>
        <div id='Application'>
          <div className='some-global' styleName='sidebar'>
            Sidebar
          </div>
          <div styleName='content'>
            <Pages />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Application
