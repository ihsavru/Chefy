import React from 'react';
import { Provider } from 'react-redux';
import store from "../stores/index";
import Main from "../components/main_component";


class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <Main/>
      </Provider>
    );
  }
}

export default App;
