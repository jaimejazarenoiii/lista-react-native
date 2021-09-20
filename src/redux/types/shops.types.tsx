import { ImageSourcePropType } from "react-native"
import { ImgInterface } from "./common.types"
import { ItemInterface } from './items.types'

export enum ShopSessionStatus {
  Active = 0,
  Inactive = 1
}

export class ShopInterface {
  static schema: Realm.ObjectSchema = {
    name: "Shop",
    properties: {
      _id: "string",
      name: "string",
      date: 'date',
      budgetAmount: 'string',
      status: "string",
    },
    primaryKey: "_id",
  }
  _id: String = ''
  name: String = ''
  budgetAmount: String = ''
  date: Date = new Date()
  status: ShopSessionStatus = ShopSessionStatus.Active
}

export const REFRESH_LIST = 'REFRESH_LIST'
export const ADD_SHOP = 'ADD_SHOP'
export const UPDATE_SHOP= 'UPDATE_SHOP'

interface RefreshAction {
  type: typeof REFRESH_LIST,
  payload: Promise<Realm.Results<any>>
}

interface AddShopAction {
  type: typeof ADD_SHOP,
  payload: Promise<Realm.Results<any>>
}

interface UpdateShopAction {
  type: typeof UPDATE_SHOP,
  payload: ShopInterface[]
}

export type ShopActionTypes = AddShopAction | UpdateShopAction | RefreshAction
