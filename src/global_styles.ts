import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import bgimg from "./assets/bg.png"

export const AppContainer = styled.div`
    background-color: #161616;
    height: 100%;
    width: 100%;
`

 
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

`;
