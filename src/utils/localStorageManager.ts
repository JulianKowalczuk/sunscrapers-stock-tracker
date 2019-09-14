import { AlphavantageSymbolSearchCompany } from 'models'

const companiesLocalStorageKey = 'companies'

const getCompanies = () => JSON.parse(localStorage.getItem(companiesLocalStorageKey) || '[]')

const setCompanies = (companies: AlphavantageSymbolSearchCompany[]) =>
  localStorage.setItem(companiesLocalStorageKey, JSON.stringify(companies))

export default { getCompanies, setCompanies }
