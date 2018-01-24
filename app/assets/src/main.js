import React from 'react'
import { render } from 'react-dom'
import { RouterProvider } from 'react-router5'
import { useStrict } from 'mobx'

import { api } from 'fronto-api'

import { Application, 
         store as layout } from './layouts'

import createRouter from '../config/router'


// MobX useStrict
useStrict(true)

const router = createRouter({ listener: true, logger: true })

// Endpoint is the networking layer, you can point to your API endpoint here.
// if you prefix your api with /api change the endpoint accordingly.
// You can also customize how the header is sent to the endpoint. 
// In this case we will use JWT.

// You can also use multiple endpoint by creating a javascript object instead.
const endpoint = api({
  endpoint: '/',
  header: (h) => {
    const token = localStorage.getItem('token')
    if (token) {
      h.append('Authorization', `Bearer ${token}`)
    }
  }
})

// resources represent any shared state across all components.
// For example the layout can be use to set and control singletons,
// in the Application layout component.
const resources = {
  endpoint, 
  layout
}

const app = 
  <RouterProvider router={router}>
    <Application {...resources} />
  </RouterProvider>

router.start(() => 
  render(app, document.getElementById('app'))
)
