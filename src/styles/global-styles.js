import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import React from 'react';

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const GlobalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }
      html {
        font-size: 16px;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        -o-text-size-adjust: none;
        -ms-overflow-style: none;
      }
      body {
        letter-spacing: -0.025em;
        margin: 0 auto;
        height: 100vh;
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
      }
      html,
      body,
      #__next {
        height: 100vh;
        width: 100%;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input,
      button {
        cursor: pointer;
        box-shadow: none;
        background: none;
        border: 0;
        color: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        -webkit-appearance: none;
        &:focus,
        &:active {
          outline: none;
        }
      }
      ol,
      ul,
      li {
        list-style: none;
      }
    `}
  />
);
