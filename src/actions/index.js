import { todoApi } from "../api";
export const addTodo = (dispatch) => async (content) => {
  try {
    const rst = await todoApi.addTodo({
      content,
      isCompleted: false,
    }); //add data to backend database.
    console.log(rst);
    dispatch({
      type: "ADD",
      payload: {
        content,
        isCompleted: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const rst = await todoApi.delTodo(index);
    console.log(rst);
    dispatch({
      type: "DEL",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const rst = await todoApi.modTodo(index);
    console.log(rst);
    dispatch({ type: "MOD", payload: index });
  } catch (e) {
    console.log(e);
  }
};
