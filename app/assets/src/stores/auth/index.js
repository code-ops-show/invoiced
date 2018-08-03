import { Connect, mix } from 'fronto-connect'
import { extendObservable, action, computed } from 'mobx'

class Auth extends Connect {
  namespace = 'v1'
  resource = 'sessions'

  constructor(api, namespace = null) {
    super(api, namespace)

    extendObservable(this, {
      signedIn: false
    })
  }

  @action setSignedIn(status) {
    this.signedIn = status
  }

  @computed get current() {
    return this.selected
  }

  @computed get confirmed() {
    if (this.signedIn) {
      return this.selected.confirmed_at || false
    } else {
      return true
    }
  }

  signIn(email = null, password = null) { 
    const token = localStorage.getItem('token')

    if (token)
      this.signInFromStorage(token)
    else if (email && password)
      this.createSession(email, password)
  }

  createSession(email, password, callback) { 
    this.setIsLoading(true)
    this.clearMessage()

    this.call({ type: 'post', body: { email, password } }, {
      201: (body) => {
        const { user, token } = body.data
        localStorage.setItem('token', token)
        this.setCurrentUser(body, token)
        if (callback) callback()
      },
      401: (_body) => {
        this.setMessage({
          body: t('unauthorized'),
          type: 'error'
        })
      },
    })
  }

  signInFromStorage(token) { 
    this.setIsLoading(true)
    this.clearMessage()

    this.call({ type: 'get' }, { 
      200: (body) => this.setCurrentUser(body, token)
    }, {
      401: (body) => this.signOut()
    })
  }

  @action setCurrentUser(body, token) { 
    this.signedIn = true
    const { user } = body.data
    this.selected = { 
      email: user.email,
      confirmed_at: user.confirmed_at,
      token
    }
  }

  signOut(callback) {
    this.setIsLoading(true)
    this.clearMessage()

    this.call({ type: 'delete' }, { 
      200: (body) => { 
        this.clearSelected()
        this.setSignedIn(false)
        localStorage.removeItem('token')
        if (callback) callback()
      }
    })
  }
}

export default Auth