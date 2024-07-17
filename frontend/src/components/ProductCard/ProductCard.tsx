import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-64">
      <div className="w-full h-64 overflow-hidden flex justify-center items-center">
        <img src={image} alt={title} className="object-contain w-full h-full" />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-custom-yellow text-xl">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
