import { useRoutes, useRedirect } from 'hookrouter'
import React from 'react'
import Container from 'react-bootstrap/Container'

import { Navbar } from 'modules'
import routes, { hookrouterRoutes } from 'routes'

const App = () => {
  useRedirect('/', routes.companies)
  const route = useRoutes(hookrouterRoutes)

  return (
    <>
      <Navbar />

      <br />

      <Container>{route}</Container>
    </>
  )
}

export default App
