import { navigate } from 'hookrouter'
import React, { useCallback, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import routes, { routeLabels } from 'routes'
import { alphavantageService } from 'services'
import { useStore } from 'store'

const AddCompanyForm = () => {
  const [companySymbol, setCompanySymbol] = useState('')
  const [shouldShowError, setShouldShowError] = useState(false)
  const { addCompany } = useStore()

  const handleCompanySymbolFieldChange = useCallback(e => setCompanySymbol(e.target.value), [
    setCompanySymbol
  ])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()

      const newCompany = await alphavantageService.getMostAccurateResultOfSearchingCompanyByKeywords(
        companySymbol
      )

      if (!newCompany) return setShouldShowError(true)

      addCompany(newCompany)

      navigate(routes.companies)
    },
    [companySymbol, addCompany, setShouldShowError]
  )

  return (
    <>
      <h2>{routeLabels.addCompany}</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Company symbol</Form.Label>

          <Form.Control
            isInvalid={shouldShowError}
            onChange={handleCompanySymbolFieldChange}
            placeholder="Company symbol"
            value={companySymbol}
          />

          <Form.Text className={shouldShowError ? 'text-danger' : 'text-muted'}>
            {shouldShowError
              ? 'No stock with provided symbol found'
              : 'Provide the stock exchange symbol of a company you want to track'}
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Track
        </Button>
      </Form>
    </>
  )
}

export default AddCompanyForm
