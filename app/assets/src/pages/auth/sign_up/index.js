import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router5'

import { Auth } from 'components/page'

import { User } from 'stores'

import buttons from 'styles/buttons.sass'

@inject('endpoint') @observer
class SignUp extends React.Component {
  constructor(props) {
    super(props)

    const { endpoint } = props

    this.store = new User(endpoint)
  }
  submitForm = (e) => {
    e.preventDefault()

    const { router } = this.props

    const params = {
      user: {
        email: this.email.value,
        password: this.password.value,
        password_confirmation: this.password_confirm.value
      }
    }

    this.store.create(null, params, {
      200: (body) => {
        const { user } = body.data
      
        router.navigate('posts')
      }
    })
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
