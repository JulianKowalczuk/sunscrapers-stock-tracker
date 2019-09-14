import createUseContext from 'constate'
import { useState, useCallback, useEffect } from 'react'

import { AlphavantageSymbolSearchCompany } from 'models'
import { localStorageManager } from 'utils'

const useStoreHook = () => {
  const [companies, setCompanies] = useState<AlphavantageSymbolSearchCompany[]>(
    localStorageManager.getCompanies()
  )

  const addCompany = useCallback(
    newCompany =>
      setCompanies(prevCompanies =>
        prevCompanies.some(company => newCompany.symbol === company.symbol)
          ? prevCompanies
          : [...prevCompanies, newCompany]
      ),
    [setCompanies]
  )

  const removeCompanyBySymbol = useCallback(
    symbol =>
      setCompanies(prevCompanies => prevCompanies.filter(company => symbol !== company.symbol)),
    [setCompanies]
  )

  useEffect(() => localStorageManager.setCompanies(companies), [companies])

  return { companies, addCompany, removeCompanyBySymbol }
}

export const useStore = createUseContext(useStoreHook)
