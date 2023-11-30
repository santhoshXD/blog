import HomePage from "./components/HomePage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

body{
  font-family: 'Dancing Script', cursive;

}

`

function App() {
  return (
    <>
    <GlobalStyle/>
     <HomePage/>
    </>
  );
}

export default App;
