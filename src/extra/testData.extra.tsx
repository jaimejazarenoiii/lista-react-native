import moment from 'moment'
import { ShopInterface, ItemInterface, ShopSessionStatus } from '../redux/types'

var shops: ShopInterface[] = [
  {
    id: String(moment().unix() + 1),
    name: 'Grocery',
    items: [],
    budgetAmount: 4000,
    date: new Date(),
    status: ShopSessionStatus.Active
  },
  {
    id: String(moment().unix() + 1),
    name: 'Hardware',
    items: [],
    budgetAmount: 4000,
    date: new Date(),
    status: ShopSessionStatus.Active
  },
  {
    id: String(moment().unix() + 1),
    name: 'Food',
    items: [],
    budgetAmount: 4000,
    date: new Date(),
    status: ShopSessionStatus.Active
  },
  {
    id: String(moment().unix() + 1),
    name: 'Shopping',
    items: [],
    budgetAmount: 4000,
    date: new Date(),
    status: ShopSessionStatus.Active
  }
]

export const testData = {
  shops
}
