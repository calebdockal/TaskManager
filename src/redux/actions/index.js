import {ADD_TASK, TOGGLE_TASK, DELETE_TASK} from './actionTypes';

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

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});
