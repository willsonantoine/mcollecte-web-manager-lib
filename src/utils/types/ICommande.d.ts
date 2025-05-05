export interface ICommande {
    id: string,
    amount: number,
    status: string,
    payementMethod: string,
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    currency: { id: string, name: string },
    lines: [
        {
            id: string,
            quantity: number,
            price: number, 
            produit: {
                id: string,
                name: string,
                price_max: number,
                images: string,
                unite: string,
                type: string,
            }
        }
    ]
}