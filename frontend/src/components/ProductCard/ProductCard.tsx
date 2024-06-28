import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="border-2 border-custom-yellow rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-custom-yellow text-xl">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
