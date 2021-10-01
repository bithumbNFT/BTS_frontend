import React from 'react';
import styled from '@emotion/styled';
import Member from 'components/Common/Member';

function Footer() {
  return (
    <FooterBox>
      <h3 className="footerTitle">With Team Members 💗 </h3>

      <ul>
        <Member
          koName="이현주"
          enName="Lee Hyunju Ju"
          major="Frontend Engineer"
          src="/images/leehyunju.png"
          github="https://github.com/leemember"
        />

        <Member
          koName="서유림"
          enName="Seo Yurim"
          major="Frontend Engineer"
          src="/images/leehyunju.png"
          github="https://github.com/yurim22"
        />
        <Member
          koName="조원희"
          enName="Cho Wonhe"
          major="Backend Engineer"
          src="/images/leehyunju.png"
          github="https://github.com/wonhecho"
        />
        <Member
          koName="백인준"
          enName="Back Injun"
          major="Backend Engineer"
          src="/images/leehyunju.png"
          github="https://github.com/baekinjun"
        />
        <Member
          koName="문승재"
          enName="Moon Seungjae"
          major="Backend Engineer"
          src="/images/leehyunju.png"
          github="https://github.com/msj0319"
        />
      </ul>
    </FooterBox>
  );
}

export default Footer;

export const FooterBox = styled.footer`
  padding: 30px 20px 80px;
  width: 100vw;
  background-color: #f5f5f5;
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  .footerTitle {
    padding: 50px 20px;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: -0.6px;
    font-family: 'paybooc-Bold' !important;
  }
`;
