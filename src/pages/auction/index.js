import React from 'react';
import Header from 'components/Common/Header';
import { Nfting, Images, Detail, Border } from './styles';

function auction() {
  return (
    <>
      <Header />

      <Nfting>
        {/* NFT 경매 이미지 */}
        <Images>
          <img
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            alt="경매이미지"
          />
        </Images>

        {/* NFT 경매 아이템 정보 */}
        <Detail>
          <div className="detail__header">
            <h2>머리카락 휘날리며</h2>
            <p>by 피카소</p>
          </div>

          <Border>
            <h3>💰 현입찰 가격</h3>
            <div className="price">
              <p>2000</p>
              <span>(￦3,179,688)</span>
            </div>

            <div className="detail__button">
              <button type="button">매수접수(입찰)</button>
            </div>
          </Border>

          <Border>
            <h3>🎨 작품설명</h3>
            <p>
              문화매거진N의 첫 번째 아티스트, 특별전의 주인공 류지수. 이번
              특별전을 통해 멀티 아트 퍼포머로서의 한 걸음을 떼는 그녀의 작품을
              기대해 주세요.
            </p>
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

export default auction;
