'use client'

import { getProducts, db, products } from "@/lib/db";
// import image from "next/image";
import { useRouter } from "next/router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEvent } from "react";
var stock = 0,price = "",name = "",imageUrl = ""
export default function AddItemButton(){
    

    return (<div>
        <Input onInput={onNameChanged}>Name</Input>
      <Input type="image" onInput={onImageChanged}>
        Image
      </Input>
      <Input type="number" onInput={onStockChanged}>
        stock
      </Input>
      <Input onInput={onPriceChanged}>Price</Input>
      <Button onClick={onAddButtonClick}> Add </Button>
    </div>)
}

async function onAddButtonClick() {
    const { totalProducts } = await getProducts('', 0);
    db.insert(products).values([
      {
        id: totalProducts + 1,
        status: 'active',
        availableAt: new Date(),
  
        name,
        imageUrl,
        price,
        stock
      }
    ]);
    const router = useRouter();
    router.push('/');
  }
  function onPriceChanged(e: FormEvent<HTMLInputElement>) {
    price = e.currentTarget.value;
  }
  function onImageChanged(e: FormEvent<HTMLInputElement>) {
    imageUrl = e.currentTarget.value;
  }
  
  function onNameChanged(e: FormEvent<HTMLInputElement>) {
    name = e.currentTarget.value;
  }
  function onStockChanged(e: FormEvent<HTMLInputElement>): void {
    stock = e.currentTarget.valueAsNumber;
  }
  