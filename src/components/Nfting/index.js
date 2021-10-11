import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  startAuction,
  participateAuction,
  checkAuction,
  justCheckAuction,
} from 'reducers/auction';
import useInterval from 'hooks/useInterval';
import { Nfting, Images, Detail, Border } from './styles';
import Timer from './timer';

function auctionNft({ props, status, balance }) {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const dispatch = useDispatch();

  useInterval(
    () => {
      dispatch(checkAuction(props.id, props.email));
    },
    status === 'START' ? 3000 : null,
  );

  const { checkAuctionLoading, checkAuctionDone } = useSelector(
    state => state.auctionReducer,
  );

  useEffect(() => {
    if (status === 'FINISH') {
      dispatch(justCheckAuction(props.id));
    }
  }, [status]);

  const auctionStat = () => {
    if (status === 'READY') {
      if (userInfo.email === props.email) {
        // 판매자 => 경매시작
        return 0;
      }
      // 구매자 => "아직 경매 전 입니다"
      return 1;
    }
    if (status === 'START') {
      // 경매 중
      // 입찰
      return 2;
    }
    if (status === 'FINISH') {
      // 경매 완료
      // "경매가 완료된 작품입니다."
      return 3;
      // 최고가 사람 === 나 {return 4} : 구매확정표시
    }
    return null;
  };

  const handleButtonClick = state => {
    switch (state) {
      case 0:
        if (window.confirm('경매를 시작하겠습니까?')) {
          // [TODO] period 1로 고정해서 박아놓음ㅁ.ㅎ.ㅎ
          dispatch(startAuction(props.id, parseInt(props.term, 10)));
        }
        break;
      case 2:
        if (userInfo.email === props.email) {
          window.confirm('본인작품에 입찰 하실 수 없습니다');
        } else if (window.confirm('경매에 참여하시겠습니까?')) {
          if (props.curStatus?.auction_price) {
            if (parseInt(props.curStatus?.auction_price, 10) + 1 > balance) {
              alert('입찰금액이 현재 잔액보다 커 입찰하실 수 없습니다.');
            } else {
              dispatch(
                participateAuction(
                  parseInt(props.curStatus?.auction_price, 10) + 1,
                  userInfo.email,
                  props.id,
                ),
              );
            }
          } else if (parseInt(props.price, 10) + 1 > balance) {
            alert('입찰금액이 현재 잔액보다 커 입찰하실 수 없습니다.');
          } else {
            dispatch(
              participateAuction(
                parseInt(props.price, 10) + 1,
                userInfo.email,
                props.id,
              ),
            );
          }
        }
        break;
      default:
    }
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
              {props.curStatus?.auction_price ? (
                <p>{props.curStatus?.auction_price} KLAY</p>
              ) : (
                <p />
              )}
            </div>

            <h3 className="current">👤 현재 매수왕</h3>
            <div className="email">
              {props.curStatus?.email ? <p>{props.curStatus?.email}</p> : <p />}
            </div>
            {/* 상태 구별 */}
            {/* 판매자일 때  */}
            {auctionStat() === 0 ? (
              <div className="detail__button">
                <button type="button" onClick={() => handleButtonClick(0)}>
                  경매시작
                </button>
              </div>
            ) : auctionStat() === 1 ? (
              <div className="detail__button">
                {/* <button type="button">구매확정</button> */}
                <span>⚠️ 경매시작 전 입니다.</span>
              </div>
            ) : auctionStat() === 2 ? (
              <div className="detail__button">
                <button type="button" onClick={() => handleButtonClick(2)}>
                  입찰
                </button>
              </div>
            ) : auctionStat() === 3 ? (
              <div className="detail__button">
                {/* <button type="button">경매가 종료된 작품입니다.</button> */}
                <span>경매가 종료된 작품입니다.</span>
              </div>
            ) : null}
          </Border>

          <Border>
            <h3>⏱ 남은 경매시간</h3>
            {status === 'START' ? (
              <Timer endDate={props.curStatus?.time} status={status} />
            ) : (
              <p />
            )}
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

export default auctionNft;
