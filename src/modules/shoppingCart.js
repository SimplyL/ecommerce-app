const ADD = 'ecommerce-app/shoppingCart/ADD';
const REMOVE = 'ecommerce-app/shoppingCart/REMOVE';
const CLEAR = 'ecommerce-app/shoppingCart/CLEAR';

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

    case REMOVE: {
      return state.filter(item => item.id !== action.payload);
    }

    case CLEAR: {
      return [];
    }

    default: return state;
  }
}

export const addProduct = payload => dispatch => (
  dispatch({ type: ADD, payload })
);

export const removeProduct = payload => dispatch => (
  dispatch({ type: REMOVE, payload })
);

export const clearCart = payload => dispatch => (
  dispatch({ type: CLEAR, payload })
);

export default reducer;
