const image = (state = { image: "" }, action) => {
    switch (action.type) {
      case "GET_IMAGE":
        return {
          ...state,
          image: action.data
        };
      default:
        return state;
    }
  };
  export default image;
  