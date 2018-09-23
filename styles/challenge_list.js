import css from 'styled-jsx/css';

const challengeListStyle = css.global`
  .challenge-list .challenge {
    background-color: #fff;
    margin: 10px 0px 10px 0px;
    padding: 30px;
  }
  
  .challenge-list .challenge:hover {
    box-shadow: 0 0 5px #b9b9b9;
    cursor: pointer;
  }
`;

export default challengeListStyle;
