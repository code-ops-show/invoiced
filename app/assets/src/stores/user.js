import { Connect, mix } from 'fronto-connect'
import scopes from './scopes'

class User extends Connect {
  namespace = 'v1'
  resource = 'users'
}

mix(User, scopes.writable)

export default User


