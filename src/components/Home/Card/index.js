import React from 'react';
import { VscHeart } from 'react-icons/vsc';
import { CardItem, Heart } from './style';

function Card() {
  return (
    <CardItem>
      <a href="#this" target="_blank">
        <img src="" alt="" />
        <Heart>
          <button type="button">
            <VscHeart />
          </button>
        </Heart>
      </a>
    </CardItem>
  );
}

export default Card;
