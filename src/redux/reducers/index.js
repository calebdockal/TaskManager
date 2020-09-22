import {combineReducers} from 'redux';
import tasks from './tasks';
import completed from './completed';

export default combineReducers({
  tasks,
  completed,
});
