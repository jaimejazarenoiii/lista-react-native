import { testData } from '../extra/testData.extra'
import { ShopInterface, ShopSessionStatus } from '../redux/types'
import Realm from "realm"

export const shopsService = {
    refresh,
    addShop,
    updateShop,
};

async function refresh(): Promise<Realm.Results<any>> {
  const realm = await new Realm({
    schema: [ShopInterface],
    migration: function (oldRealm, newRealm) {
      newRealm.deleteAll();
    },
  });
  let shops = realm.objects("Shop")
  console.log("ZXCXZCXZ " + shops)
  return realm.objects("Shop")
}

async function addShop({ shop }: { shop: ShopInterface }) : Promise<Realm.Results<ShopInterface>> {
  console.log("NAGDAAN dito")
  const realm = await new Realm({
    schema: [ShopInterface],
    migration: function(oldRealm, newRealm) {
      newRealm.deleteAll();
    },
  })
  console.log("NAGDAAN dito palusot6")
    // return await getFromServer('/api/');
    return await new Promise((resolve, reject) => {
        try {
            console.log("NAGDAAN dito part 2")
            let modifiedDbObjects = []
            realm.write(() => {
                realm.create("Shop", {
                    _id: '55',
                    name: shop.name,
                    budgetAmount: "123"
                })
                let shops = realm.objects("Shop")
                console.log("SOMETHING " + shops)
                resolve(shops)
            })
        } catch (e) {
            console.log("YELLOW" + e)
            reject(e)
        }
    })
}

async function updateShop({ shop }: { shop: ShopInterface }): Promise<ShopInterface[]> {
    // return await getFromServer('/api/');
    const shops = testData.shops
    shops.map(storedStory => {
        if (storedStory.id == shop.id) {
            return shop
        }
    })
    return shops
}
