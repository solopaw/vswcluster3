'use client';
import { PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function onAddButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  const router = useRouter();
  router.push('/addItem');
}
export default function AddButton() {
  return (
    <Button size="sm" onClick={onAddButtonClick} className="h-8 gap-1">
      <PlusCircle className="h-3.5 w-3.5" />
      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
        Add Product
      </span>
    </Button>
  );
}
