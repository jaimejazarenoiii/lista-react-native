import { request, failure } from './common.actions'
import { ADD_SHOP, UPDATE_SHOP, REFRESH_LIST } from '../types'
import { shopsService } from '../../services'
import { ShopInterface, ShopActionTypes, ShopSessionStatus } from '../types'
import { ActionCreator } from 'redux'

const refreshListSuccess: ActionCreator<ShopActionTypes> = (shops: Promise<Realm.Results<any>>) => {
  return { type: REFRESH_LIST, payload: shops }
}

const updateShopSuccess: ActionCreator<ShopActionTypes> = (shops: ShopInterface[]) => {
  return { type: UPDATE_SHOP, payload: shops };
}

const addShopSuccess: ActionCreator<ShopActionTypes> = (shops: Promise<Realm.Results<ShopInterface[]>>) => {
  return { type: ADD_SHOP, payload: shops };
}

export function refreshList() {
  return dispatch => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(request());
    return shopsService.refresh()
      .then(
        response => {
          dispatch(refreshListSuccess(response))
        },
        error => {
          console.log(error)
          dispatch(failure('Server error.'))
        })
  }
}

export function addShop(name: string, budgetAmount: number) {
  const shop: ShopInterface = {
    _id: '1',
    name: name
  }
  console.log(shop)
  return dispatch => {
    shopsService.addShop({ shop })
      .then(
        response => {
          dispatch(addShopSuccess(response))
        },
        error => {
          dispatch(failure('Server error.'))
        })
  }
}
