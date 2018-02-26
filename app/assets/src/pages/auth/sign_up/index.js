import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router5'

import { Auth } from 'components/page'
import buttons from 'styles/buttons.sass'

// @inject('user') @observer
class SignUp extends React.Component {
  submitForm = (e) => {
    e.preventDefault()

    // const { user } = this.props

    // user.create(
    //   this.email.value,
    //   this.password.value,
    //   this.password_confirm.value
    // )
  }

  render() {
    const extras = <Link routeName='auth.sign_in'>Want to login?</Link>

    return (
      <Auth title='Sign Up' extras={extras}>
        <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
          <label>Email</label>
          <input type='email' ref={node => { this.email = node }}
                placeholder='Email' className='pure-input-1' />
          <label>Password</label>
          <input type='password' ref={node => { this.password = node }} className='pure-input-1' placeholder='Password' />
          <input type='password' ref={node => { this.password_confirm = node }} className='pure-input-1' placeholder='Password Confirmation' />
          <button className='pure-button pure-input-1' styleName='buttons.base'>
            Sign Up
          </button>
        </form>
      </Auth>
    )
  }
}

export default SignUp
