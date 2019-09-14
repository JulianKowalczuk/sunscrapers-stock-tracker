import { navigate } from 'hookrouter'
import React, { useCallback } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootstrapNavbar from 'react-bootstrap/Navbar'

import routes, { routeLabels } from 'routes'

const Navbar = () => {
  const navigateToAddCompanyRoute = useCallback(() => navigate(routes.addCompany), [])

  const navigateToCompaniesRoute = useCallback(() => navigate(routes.companies), [])

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <Container>
        <BootstrapNavbar.Brand href="#home">Stock Tracker</BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={navigateToAddCompanyRoute}>{routeLabels.addCompany}</Nav.Link>

            <Nav.Link onClick={navigateToCompaniesRoute}>{routeLabels.companies}</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
