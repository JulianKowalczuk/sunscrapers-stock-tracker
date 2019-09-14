import axios from 'axios'

import { ClearbitCompaniesSuggestResponseData } from 'types'

const clearBitApi = axios.create({ baseURL: 'https://autocomplete.clearbit.com/v1/' })

const dislikedPrefixesInName = ['Inc.', 'L.P.']

const formatForBetterQueryResults = (name: string) =>
  dislikedPrefixesInName.reduce(
    (result, prefix) =>
      result
        .split(prefix)
        .join('')
        .trim(),
    name
  )

// Since it's test, I had to use so meaningful name :)
const getMostAccurateResultOfSearchingCompanyByName = (name: string) =>
  clearBitApi
    .get<ClearbitCompaniesSuggestResponseData>('companies/suggest', {
      params: {
        query: formatForBetterQueryResults(name)
      }
    })
    .then(response => {
      const [mostAccurateResult] = response.data

      return mostAccurateResult
    })

export default { getMostAccurateResultOfSearchingCompanyByName }
