import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;
