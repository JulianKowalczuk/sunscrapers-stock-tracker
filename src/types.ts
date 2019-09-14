export type AlphavantageGlobalQuoteResponseData = {
  'Global Quote': {
    '01. symbol': string
    '02. open': string
    '03. high': string
    '04. low': string
    '05. price': string
    '06. volume': string
    '07. latest trading day': string
    '08. previous close': string
    '09. change': string
    '10. change percent': string
  }
}

export type AlphavantageSymbolSearchResponseCompany = {
  '1. symbol': string
  '2. name': string
  '3. type': string
  '4. region': string
  '5. marketOpen': string
  '6. marketClose': string
  '7. timezone': string
  '8. currency': string
  '9. matchScore': string
}

export type AlphavantageSymbolSearchResponseData = {
  bestMatches: AlphavantageSymbolSearchResponseCompany[]
}

export type ClearbitCompaniesSuggestCompany = {
  domain: string
  logo: string
  name: string
}

export type ClearbitCompaniesSuggestResponseData = ClearbitCompaniesSuggestCompany[]
