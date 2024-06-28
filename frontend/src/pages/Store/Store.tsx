import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { allProducts } from "../../data/products"; // Import from the shared file

const Store: React.FC = () => {
  const productsPerPage = 24;
  const [visibleProducts, setVisibleProducts] = useState(productsPerPage);

  const loadMoreProducts = () => {
    setVisibleProducts(
      (prevVisibleProducts) => prevVisibleProducts + productsPerPage
    );
  };

  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-custom-yellow">
          Store
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {allProducts.slice(0, visibleProducts).map((product, index) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Link>
          ))}
        </div>
        {visibleProducts < allProducts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;
