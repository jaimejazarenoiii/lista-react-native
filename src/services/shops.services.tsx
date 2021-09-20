import { testData } from '../extra/testData.extra'
import { ShopInterface, ShopSessionStatus } from '../redux/types'
import Realm from "realm"

export const shopsService = {
    refresh,
    addShop,
    updateShop,
};



async function refresh(): Promise<Realm.Results<any>> {
    const realm = await Realm.open({
        schema: [ShopInterface],
    })
    let shops = realm.objects("Shop")
    console.log(shops)
    return realm.objects("Shop")
}

async function addShop({ shop }: { shop: ShopInterface }) : Promise<Realm.Results<any>> {
    const realm = await Realm.open({
        schema: [ShopInterface],
    })
    // return await getFromServer('/api/');
    try {
        realm.write(() => {
            let cache = realm.create("Shop", {
                _id: '1',
                name: shop.name,
                date: new Date(),
                budgetAmount: shop.budgetAmount,
                status: ShopSessionStatus[shop.status]
            })
            console.log("AHOHO " + cache)
        })
    } catch (e) {
        console.log("Error on creation " + e)
    }
    let shops = realm.objects("Shop")
    console.log("SOMETHING " + shops)
    return shops
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
