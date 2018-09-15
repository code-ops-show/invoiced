import React from 'react'
import { inject, observer } from 'mobx-react'
import { Auth } from 'components/page'
import Alert from 'components/alert'
import { Link, withRoute } from 'react-router5'

import t from './locale'

import buttons from 'styles/buttons.sass'

@inject('auth') @observer
class SignIn extends React.Component {
  submitForm = (e) => {
    e.preventDefault()

    const { auth, router } = this.props

    auth.createSession(this.email.value, this.password.value, {
      success: () => { router.navigate('posts') },
      error: () => { 
        auth.setMessage({
          body: t('error'),
          type: 'error'
        })
      }
    })
  }

  render() {
    const { auth } = this.props
    const { message } = auth

    const extras = <Link routeName='auth.sign_up'>Don't have and account?</Link>
    const alert = <Alert message={message} onDismiss={() => auth.setMessage(null)} />

    return (
      <Auth title="Sign In" extras={extras} top={alert}>
        <form className='pure-form pure-form-stacked' onSubmit={this.submitForm}>
          <label>{t('email')}</label>
          <input type='email' ref={node => { this.email = node; }}
                placeholder='email' className='pure-input-1' />
          <label>{t('password')}</label>
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
