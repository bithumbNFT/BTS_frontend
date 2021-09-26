import React, { useEffect } from 'react';
import Header from 'components/Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { LOAD_ONE_AUCTION_REQUEST } from 'reducers/auction';
import { Nfting, Images, Detail, Border } from './styles';

function auction({ match }) {
  console.warn(match);
  console.log(`"파라미터" + ${match.params.id}`);
  const dispatch = useDispatch();
  const { singlePost } = useSelector(state => state.auctionReducer);

  useEffect(() => {
    dispatch({
      type: LOAD_ONE_AUCTION_REQUEST,
    });
  }, [singlePost]);

  return (
    <>
      <Header />

      <Nfting>
        {/* NFT 경매 이미지 */}
        <Images>
          <img src="o.jpb" alt="ㅇㅇ" />
        </Images>

        {/* NFT 경매 아이템 정보 */}
        <Detail>
          <div className="detail__header">
            <h2>ㅇㅇ</h2>
            <p>by ㅇㅇ</p>
          </div>

          <Border>
            <h3>💰 현입찰 가격</h3>
            <div className="price">
              <p>2000</p>
              <span>(￦3,179,688)</span>
            </div>

            <h3 className="current">👤 현재 매수왕</h3>
            <div className="email">
              <p>me@email.com</p>
            </div>

            <div className="detail__button">
              <button type="button">구매확정</button>
            </div>
          </Border>

          <Border>
            <h3>⏱ 남은 경매시간</h3>
            <p>19:05:19</p>
          </Border>

          <Border>
            <h3>🎨 작품설명</h3>
            <p>ㅇㅇ</p>
          </Border>

          <Border>
            <h3>🧩 블록체인 등록정보</h3>

            <table>
              <tbody>
                <tr>
                  <th>NFT TX</th>
                  <td className="desc">0x1ad1e2333ad77ad7cc28d</td>
                </tr>
                <tr>
                  <th>Token ID</th>
                  <td className="desc">100000118</td>
                </tr>
                <tr>
                  <th>BlockChain</th>
                  <td className="desc">KLAYTN</td>
                </tr>
              </tbody>
            </table>
          </Border>
        </Detail>
      </Nfting>
    </>
  );
}

export default withRouter(auction);
