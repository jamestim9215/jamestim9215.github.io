import { reactive, readonly, inject } from 'vue'

export const state = Symbol('state')
export const useState = () => inject(state)
export const createStore = () => {
    const CartList = reactive([
        {
            id: 1,
            shopName: '二良烤饅頭(新莊店)',
            totolPrice: '7200',
            orderStatus: 'payment',
            productList: [
                {
                    id: 1,
                    img: 'banner.png',
                    name: "烤饅頭 (5入) x 10組",
                    shippingMethod: '自取',
                    shippingDate: '2022-12-31',
                    specification: '原味烤饅頭',
                    price: 360,
                    quantity: 10,
                },
                {
                    id: 2,
                    img: 'banner.png',
                    name: "烤饅頭 (5入) x 10組",
                    shippingMethod: '宅配',
                    shippingDate: '2022-12-05 下午',
                    specification: '花生烤饅頭',
                    price: 360,
                    quantity: 10,
                }
            ]
        },
        {
            id: 2,
            shopName: '二良烤饅頭(XX店)',
            totolPrice: '36000',
            orderStatus: 'complete',
            productList: [
                {
                    id: 1,
                    img: 'banner.png',
                    name: "烤饅頭 (5入) x 10組",
                    shippingMethod: '自取',
                    shippingDate: '2022-12-31',
                    specification: '原味烤饅頭',
                    price: 360,
                    quantity: 50,
                },
                {
                    id: 2,
                    img: 'banner.png',
                    name: "烤饅頭 (5入) x 10組",
                    shippingMethod: '自取',
                    shippingDate: '2022-12-31',
                    specification: '花生烤饅頭',
                    price: 360,
                    quantity: 50,
                }
            ]
        }
    ])


    // const fetchUserData = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(_=> {
    //             CartList = CartList;
    //             resolve()
    //         }, 1000)
    //     })
    // }

    const getCardData = (id) => {
        for (var key in CartList) {
            if (CartList[key].id === id) {
                return [CartList[key]]
            }
        }
        return []
    }

    const getOrdersCardListData = () => {
        return CartList.map((item)=>{
            return {
                ...item,
                isShowInfo: false
            }
        })
    }

    return {
        // fetchUserData,
        getCardData,
        getOrdersCardListData,
        CartList: readonly(CartList)
    }
}