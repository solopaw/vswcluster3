import { db, getProducts, products } from '@/lib/db';
import { Product } from '../product';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';
import AddItemButton from '@/components/AddItem';
var image = '',
  name = '',
  price = '0.00',
  stock = 0;
export default async function AddItemPage() {
  return (
    <main>
      <AddItemButton></AddItemButton>
    </main>
  );
}

async function onAddButtonClick() {
  const { totalProducts } = await getProducts('', 0);
  db.insert(products).values([
    {
      id: totalProducts + 1,
      status: 'active',
      availableAt: new Date(),

      name,
      imageUrl: image,
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
  image = e.currentTarget.value;
}

function onNameChanged(e: FormEvent<HTMLInputElement>) {
  name = e.currentTarget.value;
}
function onStockChanged(e: FormEvent<HTMLInputElement>): void {
  stock = e.currentTarget.valueAsNumber;
}
