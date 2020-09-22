import {ADD_TASK, TOGGLE_TASK} from './actionTypes';

let nextId = 0;
export const addTask = (text) => ({
  type: ADD_TASK,
  id: nextId++,
  text
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id
});
