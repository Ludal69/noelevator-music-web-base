import React, { useEffect, useState } from "react";
import { getMerchProducts } from "../../services/merchService";
import { MerchProduct } from "../../types/merchProduct";
import "./MerchProductList.css";
//TODO:
const MerchProductList: React.FC = () => {
  const [merchProducts, setMerchProducts] = useState<MerchProduct[]>([]);

  useEffect(() => {
    const fetchMerchProducts = async () => {
      try {
        const data = await getMerchProducts();
        setMerchProducts(data);
      } catch (error) {
        console.error("Error fetching merch products:", error);
      }
    };

    fetchMerchProducts();
  }, []);

  return (
    // <div>
    //   <h1>Merch Products</h1>
    //   <ul>
    //     {merchProducts.map((product) => (
    //       <li key={product.id}>
    //         {product.name} - ${product.price}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div className="products">
      {merchProducts.map((product) => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default MerchProductList;
