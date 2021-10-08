import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { Nfting, Images, Detail, Border } from './styles';

function auctionNft({ props }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const auctionStat = () => {
    if (props.auction === 'READY') {
      if (userInfo.email === props.email) {
        // 판매자 => 경매시작
        return 0;
      }
        // 구매자 => "아직 경매 전 입니다"
        return 1;
    } if (props.auction === 'START') { // 경매 중
      // 입찰
      return 2;
    } if (props.auction === 'DONE') { // 경매 완료
      // "경매가 완료된 작품입니다."
      return 3;
    }
      return null;
  };

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
            <h3>🎮 경매 시작가격</h3>
            <div className="price">
              <p>{props.price} KLAY</p>
            </div>

            <h3>💰 현입찰 가격</h3>
            <div className="price">
              <p>2000 KLAY</p>
              {/* <span>(￦3,179,688)</span> */}
            </div>

            <h3 className="current">👤 현재 매수왕</h3>
            <div className="email">
              <p>me@email.com</p>
            </div>
            {/* 상태 구별 */}
            {/* 판매자일 때  */}
            {auctionStat() === 0 ? (
              <div className="detail__button">
                <button type="button">경매시작</button>
              </div>
            ) : auctionStat() === 1 ? (
              <div className="detail__button">
                {/* <button type="button">구매확정</button> */}
                아직 경매시작 전 입니다.
              </div>
            ) : auctionStat() === 2 ? (
              <div className="detail__button">
                <button type="button">입찰</button>
              </div>
            ) : auctionStat() === 3 ? (
              <div className="detail__button">
                <button type="button">경매가 종료된 작품입니다.</button>
              </div>
            ) : null}
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
                {/* <tr>
                  <th>NFT TX</th>
                  <td className="desc">0x1ad1e2333ad77ad7cc28d</td>
                </tr> */}
                <tr>
                  <th>Token ID</th>
                  <td className="desc">{props.id}</td>
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
