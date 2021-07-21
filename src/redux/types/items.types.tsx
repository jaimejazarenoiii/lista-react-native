import { ImageSourcePropType } from "react-native"

export interface ItemInterface {
    id: String,
    name: String,
    quantity: number,
    price: number
}

export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

interface AddItemAction {
    type: typeof ADD_ITEM,
    payload: ItemInterface[]
}

interface UpdateItemAction {
    type: typeof UPDATE_ITEM,
    payload: ItemInterface[]
}

export type ItemsActonTypes = AddItemAction | UpdateItemAction
