import { v4 as uuid } from 'uuid';

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          task: action.task,
          id: uuid(),
        },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
