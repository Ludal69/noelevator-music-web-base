import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  link,
}) => {
  return (
    <div className="border-2 border-custom-yellow rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};

export default ProductCard;
