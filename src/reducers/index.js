export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, { ...payload }];
    case "DEL":
      return [...state.slice(0, payload), ...state.slice(payload + 1)];
    case "MOD":
      return state.map((item, index) => {
        if (index === payload) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    default:
      return state;
  }
};
