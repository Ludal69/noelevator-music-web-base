import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { allProducts, Product } from "../../data/products";

Modal.setAppElement("#root"); // Set root element for accessibility

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = allProducts.find(
    (product) => product.id === id
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) {
    return <div>Product not found</div>;
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality here
    console.log("Added to cart:", product.title, selectedSize);
  };

  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen p-8 text-white flex items-center justify-center">
      <div className="md:w-1/2 relative cursor-pointer" onClick={openModal}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover mb-4 md:mb-0 rounded"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="text-white text-lg">Click to enlarge</span>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-2xl mb-4">{product.price}</p>
        <p className="mb-4">{product.description}</p>
        <label className="block mb-2">
          <span className="text-white">Size:</span>
          <select
            value={selectedSize}
            onChange={handleSizeChange}
            className="block w-full mt-1 p-2 bg-gray-700 text-white rounded"
          >
            <option value="">Select a size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">X-Large</option>
          </select>
        </label>
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4"
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
      </div>

      {/* Modal for image enlargement */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Image"
        className="flex items-center justify-center h-full z-50" // Increased z-index
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50" // Increased z-index
      >
        <div className="relative h-full w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl z-50"
          >
            &times;
          </button>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
