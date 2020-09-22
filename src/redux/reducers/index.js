import {combineReducers} from 'redux';
import tasks from './tasks';
import completedTask from './completedTask';

export default combineReducers({
  tasks,
  completedTask
});
