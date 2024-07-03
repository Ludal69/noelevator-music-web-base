import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/productService";
import { Product } from "../../types";

// Utility function to dynamically import images
const importImage = async (path: string) => {
  try {
    const image = await import(`../../assets/Images/${path}`);
    return image.default;
  } catch (error) {
    console.error(`Failed to import image: ${path}`, error);
    return "path/to/default/image.svg"; // Fallback image path
  }
};

const Store: React.FC = () => {
  const productsPerPage = 24;
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState(productsPerPage);
  const [images, setImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setProducts(products);

        const imagePromises = products.map(async (product: Product) => ({
          [product.imageUrl]: await importImage(product.imageUrl),
        }));

        const imageImports = await Promise.all(imagePromises);
        const imageMap = imageImports.reduce(
          (acc, curr) => ({ ...acc, ...curr }),
          {}
        );
        setImages(imageMap);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

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
          {products.slice(0, visibleProducts).map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard
                image={images[product.imageUrl]}
                title={product.title}
                price={`$${product.price}`}
              />
            </Link>
          ))}
        </div>
        {visibleProducts < products.length && (
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
