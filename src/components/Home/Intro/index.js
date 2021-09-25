import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
// import klaytn from '../../../../public/images/klaytn.svg';
import {
  HomeMain,
  ChartWrap,
  Chart,
  Button,
  CoinDesc,
  InfoLeft,
  InfoRight,
  TextWrapper,
} from './style';
import CoinChart from '../CoinChart';
import CoinHeader from '../CoinHeader';

function HomeIntro() {
  return (
    <>
      <HomeMain>
        <ChartWrap>
          <Chart>
            <h1>
              한층 더 새로워진 <TextWrapper>NFT</TextWrapper> 사용법
            </h1>
            <CoinDesc>
              <InfoLeft>
                <CoinHeader />
                <CoinChart />
              </InfoLeft>
              <InfoRight>
                <img src="/images/klaytnLogo.png" alt="klaytnImg" />
                <h4>
                  KLAYTN을 이용하여
                  안전하게 거래할 수 있습니다.
                </h4>
              </InfoRight>
            </CoinDesc>
            <Button>
              <HiChevronDown />
            </Button>
          </Chart>
        </ChartWrap>
      </HomeMain>
    </>
  );
}

export default HomeIntro;
