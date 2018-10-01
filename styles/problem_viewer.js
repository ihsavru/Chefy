import css from 'styled-jsx/css';

const problemViewerStyle = css`
  .modal-header {
    display: grid;
    grid-template-columns: 5fr 1fr;
    border-bottom: 1px solid #ccc;
    background-color: #26a69a;
    color: #fff;
    text-transform: uppercase;
    position: sticky;
    top: 0;
    padding: 15px;
  }
  
  .modal-header h2 {
    margin: 0;
  }
  
  .close-btn-container {
    text-align: right;
    padding: 5px;
  }
  
  .modal-header a {
    background-color: #ed1c24;
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
  }
  
  .modal-body, .modal-footer {
    padding: 30px;
  }
  
  .modal-footer {
    padding: 10px;
    position: sticky;
    bottom: 0;
    background-color: #fff;
    box-shadow: 0 -1px 1px #b9b9b9;
  }
  
  .modal-footer button {
    font-size: 18px;
    padding: 5px 10px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
  
`;

export default problemViewerStyle;
