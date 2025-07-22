export class CartStoreItemMock {
    cart$: any;
    cart: any = {
        products: [
            {
                product: {
                    id: 1
                },
                amount: 100,
                quantity: 1
            },
        ],
        totalAmount: 100,
        totalProducts: 1
    };
    addProduct(): any { };
    decreaseProductQuantity: any;
    removeProduct: any;
    saveCart: any;
    clearCart: any;
}