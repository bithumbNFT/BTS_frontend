import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styled from '@emotion/styled';

function Member({ koName, major, enName, src, github, name }) {
  return (
    <MemberBox className={name}>
      <MemberPhoto>
        <img src={src} alt={koName} />
      </MemberPhoto>
      <MemberInfo>
        <h3>
          {koName} / {enName}
        </h3>
        <p>{major}</p>
        <a href={github} className="github" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </MemberInfo>
    </MemberBox>
  );
}

export default Member;

const MemberBox = styled.li`
  width: 250px;
  display: grid;
  grid-auto-columns: 1fr 1fr;
  place-items: center;
`;

const MemberPhoto = styled.div`
  width: 198px;
  height: 198px;
  border-radius: 50%;
  background: rgba(254, 80, 0, 0.4);
  overflow: hidden;
  img {
    width: 100%;
    margin-left: 18px;
  }
  @media (max-width: 1024px) {
    width: 160px;
    height: 160px;
  }
`;

const MemberInfo = styled.div`
  margin-top: 16px;
  text-align: center;
  h3 {
    font-size: 1.1rem;
    line-height: 1.75;
    font-weight: 700;
    letter-spacing: -0.8px;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.75;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  svg {
    font-size: 1.3rem;
  }
`;
