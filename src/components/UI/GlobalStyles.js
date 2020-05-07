import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit
  }
  html, body, #root {
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${props => props.theme.fontSizes.md}px;
    font-weight: ${props => props.theme.fontWeights.reg};
    line-height: ${props => props.theme.lineHeights.normal};
    letter-spacing: ${props => props.theme.letterSpacings.normal};
    color: ${props => props.theme.colors.text[1]};
    background-color: ${props => props.theme.colors.bg[0]};
    height: 100%;
    margin: 0;
    padding 0;
    -webkit-tap-highlight-color: transparent;
  }
  body, #root {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5 {
    font-family: ${props => props.theme.fonts.heading};
    padding: 8px 0;
    margin: 0;
  }
  h1 {
    font-size: ${props => props.theme.fontSizes.xxxxl}px;
  }
  h2 {
    font-size: ${props => props.theme.fontSizes.xxxl}px;
  }
  h3 {
    font-size: ${props => props.theme.fontSizes.xxl}px;
  }
  h4 {
    font-size: ${props => props.theme.fontSizes.xl}px;
  }
  h5 {
    font-size: ${props => props.theme.fontSizes.lg}px;
  }
  p {
    margin-top: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    h1 {
      font-size: ${props => props.theme.fontSizes.xxxl}px;
    }
    h2 {
      font-size: ${props => props.theme.fontSizes.xxl}px;
    }
    h3 {
      font-size: ${props => props.theme.fontSizes.xl}px;
    }
    h4 {
      font-size: ${props => props.theme.fontSizes.lg}px;
    }
    h5 {
      font-size: ${props => props.theme.fontSizes.md}px;
    }
    :focus {
      outline: none;
    }
    ::-moz-focus-inner {
      border: 0;
    }
  };
`

export default GlobalStyles;
