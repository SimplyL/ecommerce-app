const ADD = 'ecommerce-app/shoppingCart/ADD';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD: {
      const { id, quantity } = action.payload;
      const existingProduct = state.find(item => item.id === id);
      let items = [];

      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity + quantity;
        items = [
          ...state.filter(item => item.id !== id),
          existingProduct,
        ];
      } else {
        items = [
          ...state,
          {
            id,
            quantity,
          }
        ];
      }

      return items;
    }
    default: return state;
  }
}

export const addProduct = payload => dispatch => (
  dispatch({ type: ADD, payload })
);

export default reducer;
