import cx from 'classnames'
import React, { useState, useEffect, FC } from 'react'
import Media from 'react-bootstrap/Media'

import { AlphavantageGlobalQuoteStockInfo, AlphavantageSymbolSearchCompany } from 'models'
import { alphavantageService, clearBitService } from 'services'
import { ClearbitCompaniesSuggestCompany } from 'types'

type Props = { company: AlphavantageSymbolSearchCompany }

const CompaniesInfo: FC<Props> = ({ company: alphavantageCompany }) => {
  const [lazyLoadedInfo, setLazyLoadedInfo] = useState<
    (AlphavantageGlobalQuoteStockInfo & ClearbitCompaniesSuggestCompany) | undefined
  >(undefined)

  useEffect(() => {
    Promise.all([
      alphavantageService.getStockInfoBySymbol(alphavantageCompany.symbol),
      clearBitService.getMostAccurateResultOfSearchingCompanyByName(alphavantageCompany.name)
    ]).then(([stockInfo, clearbitCompany]) =>
      setLazyLoadedInfo({
        ...stockInfo,
        ...clearbitCompany
      })
    )
  }, [alphavantageCompany, setLazyLoadedInfo])

  let isStockChangeNegative = false
  let isStockChangePositive = false

  if (lazyLoadedInfo) {
    const change = Number(lazyLoadedInfo.change)

    isStockChangeNegative = change < 0
    isStockChangePositive = change > 0
  }

  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={lazyLoadedInfo ? lazyLoadedInfo.logo : undefined}
        alt="Company logo"
      />

      <Media.Body>
        <h5 className="d-inline">
          <b>{alphavantageCompany.name}</b>
        </h5>

        <span className="ml-3">{alphavantageCompany.symbol}</span>

        {lazyLoadedInfo && <span className="ml-3">{lazyLoadedInfo.domain}</span>}

        <br />

        <span>{alphavantageCompany.region}</span>

        <span className="ml-3">
          {`${alphavantageCompany.marketOpen} - ${alphavantageCompany.marketClose} `}
          {alphavantageCompany.timezone}
        </span>

        <br />

        {lazyLoadedInfo && (
          <>
            <span>
              <b>{`${Math.round(Number(lazyLoadedInfo.price) * 100) / 100} `}</b>
              {alphavantageCompany.currency}
            </span>
            <span
              className={cx([
                'ml-3',
                isStockChangeNegative && 'text-danger',
                isStockChangePositive && 'text-success'
              ])}
            >
              {`${lazyLoadedInfo.change} (${lazyLoadedInfo.changePercent})`}
            </span>

            {isStockChangeNegative && <span className="text-danger">↓</span>}
            {isStockChangePositive && <span className="text-success">↑</span>}

            <span className="ml-3">{`Closed: ${lazyLoadedInfo.latestTradingDay}`}</span>
          </>
        )}
      </Media.Body>
    </Media>
  )
}

export default CompaniesInfo
