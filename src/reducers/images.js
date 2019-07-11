const image = (state = { image: "", loading: false }, action) => {
  switch (action.type) {
    case "GET_IMAGE":
      return {
        ...state,
        image: action.data,
        loading : false
      };
    case "IS_LOADING":
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};
export default image;
