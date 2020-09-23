import {ADD_TASK, DELETE_TASK, TOGGLE_TASK} from '../actions/actionTypes';

const tasks = (state = [], action) => {
  // switch statement will check which action will be passed
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.id ? {...task, completed: !task.completed} : task
      );
    case 'DELETE_TASK':
      return [...state.filter(task.get('id') !== action.payload.id)];
    default:
      return state;
  }
};

export default tasks;
