import React from 'react'

import { AddCompanyForm, CompaniesList } from 'modules'

const routes = {
  companies: '/companies',
  addCompany: '/addCompany'
}

export const routeLabels: typeof routes = {
  companies: 'Companies',
  addCompany: 'Track new company'
}

export const hookrouterRoutes = {
  [routes.companies]: () => <CompaniesList />,
  [routes.addCompany]: () => <AddCompanyForm />
}

export default routes
