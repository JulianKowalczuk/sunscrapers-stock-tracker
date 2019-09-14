import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { useStore } from 'store'
import CompanyInfo from './CompanyInfo'

const CompaniesList = () => {
  const { companies, removeCompanyBySymbol } = useStore()

  return (
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
  )
}

export default CompaniesList
