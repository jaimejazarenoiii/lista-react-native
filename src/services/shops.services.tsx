import { testData } from '../extra/testData.extra';
import { ShopInterface } from '../redux/types';

export const shopsService = {
    refresh,
    addShop,
    updateShop,
};

async function refresh(): Promise<ShopInterface[]> {
    return testData.shops
}

async function addShop({ shop }: { shop: ShopInterface }) : Promise<ShopInterface[]> {
    // return await getFromServer('/api/');
    var shops = testData.shops
    shops.push(shop)
    testData.shops = shops
    return testData.shops
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
