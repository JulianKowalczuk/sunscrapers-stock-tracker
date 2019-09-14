import axios from 'axios'

import { AlphavantageSymbolSearchCompany, AlphavantageGlobalQuoteStockInfo } from 'models'
import { AlphavantageGlobalQuoteResponseData, AlphavantageSymbolSearchResponseData } from 'types'

const alphavantageApi = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
  params: { apikey: process.env.REACT_APP_ALPHAVANTAGE_API_KEY }
})

const getMostAccurateResultOfSearchingCompanyByKeywords = (keywords: string) =>
  alphavantageApi
    .get<AlphavantageSymbolSearchResponseData>('', {
      params: { function: 'SYMBOL_SEARCH', keywords }
    })
    .then(response => {
      const [mostAccureteResult] = response.data.bestMatches

      return mostAccureteResult
        ? new AlphavantageSymbolSearchCompany(mostAccureteResult)
        : undefined
    })

const getStockInfoBySymbol = (symbol: string) =>
  alphavantageApi
    .get<AlphavantageGlobalQuoteResponseData>('', { params: { function: 'GLOBAL_QUOTE', symbol } })
    .then(response => new AlphavantageGlobalQuoteStockInfo(response.data))

export default { getMostAccurateResultOfSearchingCompanyByKeywords, getStockInfoBySymbol }
