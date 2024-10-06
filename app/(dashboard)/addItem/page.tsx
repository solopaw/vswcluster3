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

