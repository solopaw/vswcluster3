import { db, getProducts, products } from "@/lib/db"
import { Product } from "../product"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent } from "react"
var image = "",name = "",price = "0.00",stock=0
export default async function AddItemPage(){
    
    

    return (
        <main>
            <Input onInput={onNameChanged}>Name</Input>
            <Input type="image" onInput={onImageChanged}>Image</Input>
            <Input type="number" onInput={onStockChanged}>stock</Input>
            <Input  onInput={onPriceChanged}>Price</Input>
            <Button onClick={onAddButtonClick}> Add </Button>
        </main>
    )
}

async function onAddButtonClick(){
    const getProductsReturn = (await getProducts('', 0))
const productList = getProductsReturn.products
const {totalProducts} = getProductsReturn
    db.insert(products).values([{
        id: totalProducts + 1,
        status:'active',
              availableAt: new Date(),

        name,imageUrl:image,price,stock
    }])

}
function onPriceChanged(e:FormEvent<HTMLInputElement>){
    price = e.currentTarget.value
}
function onImageChanged(e:FormEvent<HTMLInputElement>){
    image = e.currentTarget.value
}

function onNameChanged(e:FormEvent<HTMLInputElement>){
    name = e.currentTarget.value
}
function onStockChanged(e: FormEvent<HTMLInputElement>): void {
    stock = e.currentTarget.valueAsNumber
    }