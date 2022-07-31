export const addTodo = (dispatch) => (content) => {
  dispatch({
    type: "ADD",
    payload: {
      content: content,
      isCompleted: false,
    },
  });
};

export const delTodo = (dispatch) => (index) => {
  dispatch({
    type: "DEL",
    payload: index,
  });
};

export const modTodo = (dispatch) => (index) => {
  dispatch({ type: "MOD", payload: index });
};
