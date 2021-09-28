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
  ButtonWrap,
  TextWrapper,
} from './style';
import CoinChart from '../CoinChart';
import CoinHeader from '../CoinHeader';

function HomeIntro({ onClick }) {
  return (
    <>
      <HomeMain>
        <ChartWrap>
          <Chart>
            <h1>
              한층 더 새로워진 <TextWrapper>NFT</TextWrapper> 사용법 ✨
            </h1>
            <CoinDesc>
              <InfoLeft>
                <CoinHeader />
                <CoinChart />
              </InfoLeft>

              <InfoRight>
                <img src="/images/klaytnLogo.png" alt="klaytnImg" />
                <h4>
                  <strong>KLAYTN</strong>을 이용하여 안전하게 거래하세요.
                </h4>
              </InfoRight>
            </CoinDesc>

            <ButtonWrap>
              <Button onClick={onClick}>
                <HiChevronDown />
              </Button>
            </ButtonWrap>
          </Chart>
        </ChartWrap>
      </HomeMain>
    </>
  );
}

export default HomeIntro;
