const breed = (state = { listBreed: [], breed: "", listSubBreed: [],sub_breed:"" }, action) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        listBreed: action.data,
        breed: "all",
        sub_breed: "all"
      };
    case "GET_SUBBREED":
      return {
        ...state,
        listSubBreed: action.data
      };
    case "CHANGE_BREED":
      return {
        ...state,
        breed: action.data,
        sub_breed: "all",
      };
    case "CHANGE_SUBBREED":
      return {
        ...state,
        sub_breed: action.data
      };
    default:
      return state;
  }
};
export default breed;
