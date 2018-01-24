import React, { createElement } from 'react'
import { routeNode } from 'react-router5'
import Loadable from 'react-loadable'
import Loading from 'components/loading'

export default routeNode('')((props) => {
  const { route } = props
  const { params } = route

  const segment = route.name.split('.')[0]

  return createElement(Loadable({
    loader: () => import(`./${segment}`),
    loading: (props) => <Loading />
  }))
 })