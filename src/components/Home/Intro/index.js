import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { HomeMain, ChartWrap, Chart, Button } from './style';

function HomeIntro() {
  return (
    <>
      <HomeMain>
        <ChartWrap>
          <Chart>
            <h1>한층 더 새로워진 NFT 사용법</h1>

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
