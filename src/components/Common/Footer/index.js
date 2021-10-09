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
          enName="Lee HyunJu"
          major="Frontend Engineer"
          src="/images/hyunju.png"
          github="https://github.com/leemember"
          name="hyunju"
        />

        <Member
          koName="서유림"
          enName="Seo Yurim"
          major="Frontend Engineer"
          src="/images/yurim.png"
          github="https://github.com/yurim22"
          name="yurim"
        />
        <Member
          koName="조원희"
          enName="Cho Wonhe"
          major="Backend Engineer"
          src="/images/wonhe.png"
          github="https://github.com/wonhecho"
          name="wonhe"
        />
        <Member
          koName="백인준"
          enName="Back Injun"
          major="Backend / DevOps"
          src="/images/baekinjun.png"
          github="https://github.com/baekinjun"
          name="baekinjun"
        />
        <Member
          koName="문승재"
          enName="Moon Seungjae"
          major="Backend Engineer"
          src="/images/seungjae.png"
          github="https://github.com/msj0319"
          name="seungjae"
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
  .seungjae {
    img {
      margin-left: 0;
    }
  }
  .wonhe {
    img {
      margin-left: 0;
    }
  }
  .baekinjun {
    img {
      margin-left: 0;
    }
  }
  @media (max-width: 1024px) {
    .footerTitle {
      font-size: 1.6rem;
    }
  }
`;
