import logoImage from "../assets/Images/no_elevator_gf_logo.svg"; // Adjust the path as needed

export interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  description: string;
}

export const allProducts: Product[] = [
  {
    id: "1",
    image: logoImage,
    title: "No Elevator T-Shirt",
    price: "$20.00",
    description: "A stylish t-shirt featuring the No Elevator logo.",
  },
  {
    id: "2",
    image: logoImage,
    title: "No Elevator Hoodie",
    price: "$35.00",
    description: "A warm hoodie with the No Elevator logo.",
  },
  {
    id: "3",
    image: logoImage,
    title: "No Elevator Poster",
    price: "$10.00",
    description: "A poster with the No Elevator artwork.",
  },
  {
    id: "4",
    image: logoImage,
    title: "No Elevator Vinyl",
    price: "$25.00",
    description: "A vinyl record of No Elevator's latest album.",
  },
  // Add more products here as needed
];
