import { A } from 'hookrouter'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import routes, { routeLabels } from 'routes'
import { useStore } from 'store'
import CompanyInfo from './CompanyInfo'

const CompaniesList = () => {
  const { companies, removeCompanyBySymbol } = useStore()

  return (
    <>
      <h2>{routeLabels.companies}</h2>

      {companies.length ? (
        <ListGroup>
          {companies.map(company => (
            <ListGroup.Item key={company.symbol}>
              <button
                className="bg-transparent border-0 cursor-pointer float-right text-danger"
                onClick={() => removeCompanyBySymbol(company.symbol)}
              >
                ✖
              </button>

              <CompanyInfo company={company} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <span>
          There are no companies yet. <A href={routes.addCompany}>Track your first company.</A>{' '}
        </span>
      )}
    </>
  )
}

export default CompaniesList
