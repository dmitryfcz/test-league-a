import { createGlobalStyle } from "styled-components";
import Posts from "./components/Posts";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0 0 30px;
    font-size: 16px;
    background-color: #f0f0f0;
  }
`
const App = () => {
  return <>
    <GlobalStyle />
    <Posts />
    </>
}

export default App;
