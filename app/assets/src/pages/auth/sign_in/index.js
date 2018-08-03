import React from 'react'
import { inject, observer } from 'mobx-react'
import { Auth } from 'components/page'
import { Link, withRoute } from 'react-router5'

import buttons from 'styles/buttons.sass'

@inject('auth') @observer
class SignIn extends React.Component {
  submitForm = (e) => {
    e.preventDefault()

    const { auth, router } = this.props

    auth.createSession(this.email.value, this.password.value, () => {
      router.navigate('posts')
    })
  }

  render() {
    const extras = <Link routeName='auth.sign_up'>Don't have and account?</Link>

    return (
      <Auth title="Sign In" extras={extras}>
        <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
          <label>Email</label>
          <input type='email' ref={node => { this.email = node; }}
                placeholder='email' className='pure-input-1' />
          <label>Password</label>
          <input type='password' ref={node => { this.password = node; }} className='pure-input-1'/>
          <button className='pure-button pure-input-1' styleName='buttons.base'>
            Sign In
          </button>
        </form>
      </Auth>
    )
  }
}

export default withRoute(SignIn)
