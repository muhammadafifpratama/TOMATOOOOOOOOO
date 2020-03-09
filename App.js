import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Kucing from './src/navigations/mainavigations'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers';

class App extends Component {
  state = {}
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <NavigationContainer>
          <Kucing />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;