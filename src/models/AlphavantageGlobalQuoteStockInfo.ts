import { AlphavantageGlobalQuoteResponseData } from 'types'

export default class AlphavantageGlobalQuoteStockInfo {
  change: string
  changePercent: string
  high: string
  latestTradingDay: string
  low: string
  open: string
  previousClose: string
  price: string
  symbol: string
  volume: string

  constructor(apiResponseData: AlphavantageGlobalQuoteResponseData) {
    const globalQuote = apiResponseData['Global Quote']

    this.change = globalQuote['09. change']
    this.changePercent = globalQuote['10. change percent']
    this.high = globalQuote['03. high']
    this.latestTradingDay = globalQuote['07. latest trading day']
    this.low = globalQuote['04. low']
    this.open = globalQuote['02. open']
    this.previousClose = globalQuote['08. previous close']
    this.price = globalQuote['05. price']
    this.symbol = globalQuote['01. symbol']
    this.volume = globalQuote['06. volume']
  }
}
