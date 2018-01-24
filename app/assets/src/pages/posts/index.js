import { createElement } from 'react'
import { routeNode } from 'react-router5'

import collection from './collection'

const pages = {
  collection
}

export default routeNode('posts')((props) => {
  const { route } = props

  const page = route.name.split('.')[1] || 'collection'

  return createElement(pages[page])
})
