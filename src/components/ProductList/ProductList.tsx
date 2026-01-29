import { Suspense, useEffect, useState } from "react";
import type Product from "../../types/Product";
import { ProductCard } from "../ProductCard/ProductCard";

export default function ProductList() {
  //React 18
   const [products, setProducts] = useState<Product[]>([]);
    async function fetchProducts() {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const arr = await res.json();
      setProducts(arr);
    }

    useEffect(() => {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchProducts();
    }, []);

//   //React 19
//   async function fetchProducts() {
//     const res = await fetch("https://api.escuelajs.co/api/v1/products");
//     if (!res.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     return res.json();
//   }

//   const products = use(fetchProducts());

  return (
    // //React 19
     <div>
        <Suspense fallback={<p>Loading...</p>}>
      {/* {products.map((product: Product) => (
        <div key={product.id}>{product.title}</div>
      ))} */}
    {/* //React 18 */}
      
        {products.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      
       </Suspense>
    </div>
  );
}
