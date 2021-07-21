import { ImageSourcePropType } from "react-native"
import { ImgInterface } from "./common.types"
import { ItemInterface } from './items.types'

export enum ShopSessionStatus {
  Active,
  Inactive
}

export interface ShopInterface {
  id: String,
  name: String,
  items: ItemInterface[],
  budgetAmount: Number,
  date: Date,
  status: ShopSessionStatus
}

export const REFRESH_LIST = 'REFRESH_LIST'
export const ADD_SHOP = 'ADD_SHOP'
export const UPDATE_SHOP= 'UPDATE_SHOP'

interface RefreshAction {
  type: typeof REFRESH_LIST,
  payload: ShopInterface[]
}

interface AddShopAction {
  type: typeof ADD_SHOP,
  payload: ShopInterface[]
}

interface UpdateShopAction {
  type: typeof UPDATE_SHOP,
  payload: ShopInterface[]
}

export type ShopActionTypes = AddShopAction | UpdateShopAction | RefreshAction
