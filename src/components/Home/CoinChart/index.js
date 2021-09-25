import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function CoinChart() {
  return (
    <>
      <TradingViewWidget
        symbol="KLAYKRW"
        theme={Themes.DARK}
        locale="kr"
        allow_symbol_change={false}
        show_popup_button={false}
        width="100%"
      />
    </>
  );
}

export default CoinChart;
