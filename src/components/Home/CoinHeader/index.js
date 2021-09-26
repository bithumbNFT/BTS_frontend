import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { coinRequestAction } from 'reducers/chart';
import { TableWrapper, TableContainer } from './style';

function CoinHeader() {
  const dispatch = useDispatch();

  const getKlaytnData = () => dispatch(coinRequestAction());

  //   setTimeout(() => getKlaytnData(), 0);
  useEffect(() => getKlaytnData(), [dispatch]);
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
  console.log(coinData);
  console.log(chartLoading);
  //   console.log(kalytnData);
  //   setInterval(() => {
  //     getKlaytnData();
  //     console.log('클레이튼 데이터 가져오기');
  //   }, 5000);

  const numberWithCommas = x => {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };

  const getColor = num => (num > 0 ? '#e12343' : '#0966c6');

  return (
    <TableWrapper>
      {chartLoading ? (
        <div>로딩중</div>
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
                //   key={coin_price.buy_price}
                key="klay"
                colSpan="2"
                style={{ color: 'red' }}
              >
                <span className="coin-info-price font-weight-bold">
                  {/* {this.numberWithCommas(coin_price.buy_price)} */}
                  {numberWithCommas('119736')}
                </span>
                <span className="word-sm ml-1">KRW</span>
              </td>
              <td className="pb-0 pt-0">
                <span className="word-sm">고가</span>
                <span className="m-3" style={{ color: '#e12343' }}>
                  {/* {this.numberWithCommas(coin_price.max_price)} */}
                  {numberWithCommas(coinData.highest_price)}
                </span>
              </td>
              <td className="pb-0 pt-0">
                <span className="word-sm mr-3">거래량(24H)</span>
                {/* {Number(coin_price.units_traded).toFixed(4)} */}
                {numberWithCommas(tradingVolume)}
                <span className="word-sm ml-1">
                  {/* {this.props.coin} */}
                  KLAY
                </span>
              </td>
            </tr>
            <tr>
              <td className="pt-0 pb-1" colSpan="2">
                <span className="word-sm">전일대비</span>{' '}
                <span style={{ color: 'red' }}>
                  {numberWithCommas(coinData.fluctate_24H)}

                  <span className="ml-3">
                    (-{Number(coinData.fluctate_rate_24H).toFixed(2)} %)
                  </span>
                </span>
              </td>
              <td className="pt-0">
                <span className="word-sm">저가</span>{' '}
                <span className="m-3" style={{ color: '#0966c6' }}>
                  {/* {this.numberWithCommas(coin_price.min_price)} */}
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
