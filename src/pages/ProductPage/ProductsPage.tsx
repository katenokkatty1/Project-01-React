
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type Product from "../../types/Product";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  async function fetchProduct(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const productRes = await res.json();
    setProduct(productRes);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct(id);
  }, [id]);

  return (
    <div>
      ProductPage
      <p>{product?.title}</p>
      <img src={product?.images[0]} alt={product?.title} />
      <Link to={"/"} >Back to home</Link>
    </div>
  );
}