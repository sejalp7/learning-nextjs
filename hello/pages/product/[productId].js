import React from "react";
import { useRouter } from "next/router";

export default function productId() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product Details Page {productId}</h1>
    </div>
  );
}
