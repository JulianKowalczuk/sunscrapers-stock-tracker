import React from 'react'

import { AddCompanyForm, CompaniesList } from 'modules'

const routes = {
  companies: '/companies',
  addCompany: '/addCompany'
}

export const hookrouterRoutes = {
  [routes.companies]: () => <CompaniesList />,
  [routes.addCompany]: () => <AddCompanyForm />
}

export default routes
