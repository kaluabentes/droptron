import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    background: ${(props) => props.theme.colors.gray};
    color: rgba(0, 0, 0, 0.9);
  }
`
