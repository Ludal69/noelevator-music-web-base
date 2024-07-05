import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { getProductById } from "../../services/productService";
import { useCart } from "../../context/CartContext";
import { addToCart as apiAddToCart } from "../../services/cartService";
import { useAuth } from "../../context/AuthContext";
import { Product } from "../../types"; // Import the Product type

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

Modal.setAppElement("#root"); // Set root element for accessibility

interface ProductDetailProps {
  toggleDrawer: (isOpen: boolean) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ toggleDrawer }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [image, setImage] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { dispatch } = useCart();
  const { token } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(id!);
      setProduct(fetchedProduct);

      if (fetchedProduct.imageUrl) {
        const imageUrl = await importImage(fetchedProduct.imageUrl);
        setImage(imageUrl);
      }
    };

    fetchProduct();
  }, [id]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = async () => {
    if (product) {
      const cartItem = {
        id: product.id.toString(), // Convert the id to a string if it's not already
        productId: product.id,
        userId: "", // This should be filled with the actual user ID if available. Ajouté dans le back si Token ? 
        quantity: 1,
        size: selectedSize,
        product: {
          ...product,
          imageUrl: image, // Use the dynamically imported image
        },
      };
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });
      if (token) {
        // Add to cart in the backend
        await apiAddToCart(token, product.id.toString(), 1, selectedSize); // Convert id to string
      }
      toggleDrawer(true); // Open the cart drawer
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen p-8 text-white flex  items-center justify-center">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-20 lg:top-28 left-4 flex items-center text-lg text-custom-yellow hover:underline"
      >
        <span className="mr-2">&larr;</span> Back
      </button>
      <div className="md:w-1/2 relative cursor-pointer" onClick={openModal}>
        <img
          src={image} // Use the dynamically imported image
          alt={product.title}
          className="w-full h-full object-cover mb-4 md:mb-0 rounded"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="text-white text-lg">Click to enlarge</span>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-2xl mb-4">${product.price}</p>
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
        className="flex items-center justify-center h-full z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-50"
      >
        <div className="relative h-full w-full">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-white text-2xl z-50"
          >
            &times;
          </button>
          <img
            src={image} // Use the dynamically imported image
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProductDetail;
