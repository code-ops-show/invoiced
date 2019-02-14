import { createElement } from 'react'
import { routeNode } from 'react-router5'

import sign_up from './sign_up'
import sign_in from './sign_in'

const pages = {
  sign_up, sign_in
}

export default routeNode('auth')((props) => {
  const { route } = props
  
  const page = route.name.split('.')[1] || 'collection'

  return createElement(pages[page], {...props})
})
