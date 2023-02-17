import styled, { createGlobalStyle } from 'styled-components';

export const DarkMode = styled.button`
  &.dark-mode-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    padding: 10px 10px;

    &.dark{
      background-color: #201d1d;
      color: #fff;
    }
    &.light{
      background-color: #f5c123;
      color: #333;
    }
  }
`;



export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bodyStyle.backgroundColor};
    color: ${props => props.bodyStyle.color};
    margin: 0;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5c123;
    height: 80px;
    border-bottom: 1px solid #ccc;
    background-color: ${props => props.bodyStyle.backgroundColorNav};
  }
`;

