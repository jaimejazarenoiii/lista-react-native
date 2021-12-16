import { REFRESH_LIST, ADD_SHOP, UPDATE_SHOP, ShopInterface, ShopActionTypes } from '../types'

interface ShopState {
  shops: ShopInterface[]
}

const initialState: ShopState = {
  shops: []
};

export function shopReducer(state: ShopState= initialState, action: ShopActionTypes): ShopState {
  switch (action.type) {
    case REFRESH_LIST:
      return {
        ...state,
        shops: action.payload
      }
    case ADD_SHOP: {
      return {
        ...state,
        shops: action.payload
      };
    }
    case UPDATE_SHOP: {
      return {
        ...state,
        shops: action.payload
      };
    }
    default:
      return state
  }
};
