import React, { lazy, Suspense } from 'react'
import { routeNode } from 'react-router5'
import Loading from 'components/loading'

export default routeNode('')((props) => {
  const { route } = props
  const { params } = route

  const segment = route.name.split('.')[0]

  const _Segment = lazy(() => import(`./${segment}`))

  return (
    <Suspense fallback={<Loading />}>
      <_Segment />
    </Suspense>
  )
 })