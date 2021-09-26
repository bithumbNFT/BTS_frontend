import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { TradingChartWrapper } from './style';

function CoinChart() {
  return (
    <TradingChartWrapper>
      <TradingViewWidget
        symbol="KLAYKRW"
        theme={Themes.DARK}
        locale="kr"
        allow_symbol_change={false}
        show_popup_button={false}
        autosize
      />
    </TradingChartWrapper>
  );
}

export default CoinChart;
