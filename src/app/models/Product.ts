export class Product{
    id:number
    name: string
    description: string
    url: string
    price: number

    constructor(name: string,description: string,  url: string, price: number){
        this.id = 0
        this.name = name
        this.description = description
        this.url = url
        this.price = price
    }
}