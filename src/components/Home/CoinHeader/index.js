import React from 'react';
import { TableContainer } from './style';

function CoinHeader() {
  const numberWithCommas = x =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const getColor = num => (num > 0 ? 'red' : 'green');
  return (
    <>
      <TableContainer
        className="table table-borderless table-light rounded-top shadow-sm text-left mb-0"
        // key={this.props.coin}
        key="klay"
      >
        <thead>
          <tr>
            <td className="coin-title font-weight-bold" colSpan="4">
              {/* {this.props.coin} */}
              Klaytn
            </td>
          </tr>
        </thead>
        <tbody className="coin-info-tbody">
          <tr>
            <td
              className="pb-0 pt-0"
              //   key={coin_price.buy_price}
              key="klay"
              colSpan="2"
              style={{ color: 'red' }}
            >
              <span className="coin-info-price font-weight-bold">
                {/* {this.numberWithCommas(coin_price.buy_price)} */}
                1234
              </span>
              <span className="word-sm ml-1">KRW</span>
            </td>
            <td className="pb-0 pt-0">
              <span className="word-sm">고가</span>
              <span className="m-3" style={{ color: 'red' }}>
                {/* {this.numberWithCommas(coin_price.max_price)} */}
                5678
              </span>
            </td>
            <td className="pb-0 pt-0">
              <span className="word-sm mr-3">거래량(24H)</span>
              {/* {Number(coin_price.units_traded).toFixed(4)} */}
              1234
              <span className="word-sm ml-1">
                {/* {this.props.coin} */}
                klay
              </span>
            </td>
          </tr>
          <tr>
            <td className="pt-0 pb-1" colSpan="2">
              <span className="word-sm">전일대비</span>{' '}
              <span style={{ color: 'red' }}>
                {/* {Number(coin_price['24H_fluctate_rate']).toFixed(2)} %{' '} */}
                aa
                <span className="ml-3">
                  {/* {this.numberWithCommas(coin_price['24H_fluctate_rate'])} */}
                  1234
                </span>
              </span>
            </td>
            <td className="pt-0">
              <span className="word-sm">저가</span>{' '}
              <span className="m-3" style={{ color: 'green' }}>
                {/* {this.numberWithCommas(coin_price.min_price)} */}
                5678
              </span>
            </td>
          </tr>
        </tbody>
      </TableContainer>
    </>
  );
}

export default CoinHeader;
