import React from 'react';
import { Provider } from 'react-redux';
import App from "./app.js";
import store from "../stores/index.js";

class Index extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <App />
      </Provider>
    );
  }
}

export default Index;
