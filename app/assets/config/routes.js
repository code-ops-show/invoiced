export default [
  { name: 'posts', path: '/posts' },
  { name: 'auth', path: '/auth', children: [
    { name: 'sign_in', path: '/sign_in' }
  ]}
]
