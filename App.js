import React from 'react';
import TaskManager from './src/screens/TaskManager';
import store from './src/redux/store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TaskManager />
      </Provider>
    );
  }
}
