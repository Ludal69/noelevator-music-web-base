import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import logo from "../../assets/Images/no_elevator_gf_logo.svg";
// import logo from "../../assets/Images/t-shirt-no-elevator-ai.png";

const allProducts = [
  {
    image: logo,
    title: "T-Shirt",
    price: "$20.00",
    link: "#",
  },
  {
    image: logo,
    title: "Chaussures",
    price: "$60.00",
    link: "#",
  },
  {
    image: logo,
    title: "Manteau",
    price: "$100.00",
    link: "#",
  },
  {
    image: logo,
    title: "Pull",
    price: "$30.00",
    link: "#",
  },
  {
    image: logo,
    title: "Hoodie",
    price: "$40.00",
    link: "#",
  },
  {
    image: logo,
    title: "Bracelet",
    price: "$1800.00",
    link: "#",
  },
  {
    image: logo,
    title: "Vinyles",
    price: "$50.00",
    link: "#",
  },
  {
    image: logo,
    title: "CD",
    price: "$10.00",
    link: "#",
  },
  {
    image: logo,
    title: "Cassette",
    price: "$15.00",
    link: "#",
  },
  {
    image: logo,
    title: "Eco-cup",
    price: "$5.00",
    link: "#",
  },
  {
    image: logo,
    title: "Short",
    price: "$20.00",
    link: "#",
  },
  {
    image: logo,
    title: "Porte-clé",
    price: "$5.00",
    link: "#",
  },
  {
    image: logo,
    title: "Casquette",
    price: "$20.00",
    link: "#",
  },
  {
    image: logo,
    title: "Sac à dos",
    price: "$60.00",
    link: "#",
  },
  {
    image: logo,
    title: "Porte-monnaie",
    price: "$40.00",
    link: "#",
  },
  {
    image: logo,
    title: "Patch",
    price: "$10.00",
    link: "#",
  },
  {
    image: logo,
    title: "Poster",
    price: "$20.00",
    link: "#",
  },
  {
    image: logo,
    title: "Bijoux",
    price: "$2000.00",
    link: "#",
  },

  // Ajoutez d'autres produits ici pour la démonstration
  // ...
];

const Store: React.FC = () => {
  const productsPerPage = 15;
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
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              link={product.link}
            />
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
