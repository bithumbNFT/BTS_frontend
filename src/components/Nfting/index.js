import React from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { Nfting, Images, Detail, Border } from './styles';

function auctionNft({ props }) {
  return (
    <>
      <Nfting>
        {/* NFT 경매 이미지 */}
        <Images>
          <img
            src={props.imagepath}
            alt={`${props.username}님의 경매 작품입니다.`}
          />
        </Images>

        {/* NFT 경매 아이템 정보 */}
        <Detail>
          <div className="detail__header">
            <div className="owner">
              <h2>{props.name}</h2>
              <p>by {props.username}</p>
            </div>

            <div className="like">
              <h3>
                <FaHeart />
              </h3>
              <p>{props.likes}</p>
            </div>
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
            <p>{props.description}</p>
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

auctionNft.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string,
    no: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default auctionNft;
