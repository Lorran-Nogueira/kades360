import { createGlobalStyle } from 'styled-components'

export const colors = {
  blue: '#03001C',
  white: '#fff'
}
export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #D9D9D9;
}

.container {
  max-width: 1120px;
  width: 100%;
  margin: 26px 28px 15px 390px;
}
`
