import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { coinRequestAction } from 'reducers/chart';
import { TableWrapper, TableContainer } from './style';

function CoinHeader() {
  const dispatch = useDispatch();
  const getKlaytnData = () => dispatch(coinRequestAction());

  useEffect(() => getKlaytnData(), []);
  const { chartLoading, chartError, coinData, tradingVolume } = useSelector(
    state => ({
      chartLoading: state.chartReducer.loadCoinData,
      // chartDone: state.chartReducer.loadCoinDone,
      chartError: state.chartReducer.loadCoinError,
      coinData: state.chartReducer.coinData,
      tradingVolume: Number(state.chartReducer.coinData.trading_volume).toFixed(
        3,
      ),
    }),
    shallowEqual,
  );

  const numberWithCommas = x => {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };

  const getColor = num => (num > 0 ? '#e12343' : '#0966c6');
  const color = getColor(Number(coinData.fluctate_rate_24H));

  return (
    <TableWrapper>
      {chartLoading ? (
        <h4>loading...</h4>
      ) : (
        <TableContainer
          className="table table-borderless table-light rounded-top shadow-sm text-left mb-0"
          // key={this.props.coin}
          key="klay"
        >
          <thead>
            <tr>
              <td className="coin-title font-weight-bold" colSpan="4">
                <img src="/images/klaytn.png" alt="klaytnLogo" />
                <span>
                  <b>KLAY</b> 클레이튼
                </span>
              </td>
            </tr>
          </thead>
          <tbody className="coin-info-tbody">
            <tr>
              <td
                className="pb-0 pt-0"
                key="klay"
                colSpan="2"
                style={{ color }}
              >
                <span className="coin-info-price font-weight-bold">
                  {numberWithCommas(coinData.now_price)}
                </span>
                <span className="word-sm ml-1">KRW</span>
              </td>
              <td className="pb-0 pt-0">
                <span className="word-sm">고가</span>
                <span className="m-3" style={{ color: '#e12343' }}>
                  {numberWithCommas(coinData.highest_price)}
                </span>
              </td>
              <td className="pb-0 pt-0">
                <span className="word-sm mr-3">거래량(24H)</span>
                {numberWithCommas(tradingVolume)} &nbsp;
                <span className="word-sm ml-1">KLAY</span>
              </td>
            </tr>
            <tr>
              <td className="pt-0 pb-1" colSpan="2">
                <span className="word-sm">전일대비</span>{' '}
                <span style={{ color }}>
                  {numberWithCommas(coinData.fluctate_24H)}

                  <span className="ml-3">
                    ({Number(coinData.fluctate_rate_24H).toFixed(2)} %)
                  </span>
                </span>
              </td>
              <td className="pt-0">
                <span className="word-sm">저가</span>{' '}
                <span className="m-3" style={{ color: '#0966c6' }}>
                  {numberWithCommas(coinData.lowest_price)}
                </span>
              </td>
            </tr>
          </tbody>
        </TableContainer>
      )}
    </TableWrapper>
  );
}

export default CoinHeader;
