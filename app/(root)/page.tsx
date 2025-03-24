import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";


export const metadata = {
  title: 'Главная'
}

export default async function HomePage() {
  const latestProducts = await getLatestProducts();
  console.log(latestProducts);

  return (
    <ProductList data={latestProducts} title="Новые поступления" limit={4}/>
  );
}
