import { AlphavantageSymbolSearchResponseCompany } from 'types'

export default class AlphavantageSymbolSearchCompany {
  currency: string
  marketClose: string
  marketOpen: string
  matchScore: string
  name: string
  region: string
  symbol: string
  timezone: string
  type: string

  constructor(company: AlphavantageSymbolSearchResponseCompany) {
    this.currency = company['8. currency']
    this.marketClose = company['6. marketClose']
    this.marketOpen = company['5. marketOpen']
    this.matchScore = company['9. matchScore']
    this.name = company['2. name']
    this.region = company['4. region']
    this.symbol = company['1. symbol']
    this.timezone = company['7. timezone']
    this.type = company['3. type']
  }
}
