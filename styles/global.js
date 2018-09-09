import css from 'styled-jsx/css';

const globalStyle = css.global`
 @import url('https://fonts.googleapis.com/css?family=Oswald:300');
 body, html {
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
  background-color: #EEE;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
 }
`;

export default globalStyle;
