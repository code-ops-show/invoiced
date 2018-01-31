import React from 'react'

import './auth.sass'

class Auth extends React.PureComponent {
  render() {
    return (
      <div styleName='auth_page_wrapper'>
        <div styleName='title'>
          <h1>{this.props.title}</h1>
        </div>
        <div styleName='form_wrapper' className='animated fadeIn'>
          {this.props.children}
        </div>
        <div styleName='extras'>
          {this.props.extras || null}
        </div>
      </div>
    )
  }
}

export default Auth
