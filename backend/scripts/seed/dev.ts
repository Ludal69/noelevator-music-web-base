import db, { genId } from "../../src/modules/db";

const productIds = {
  tshirt: genId(),
  hoodie: genId(),
  poster: genId(),
  vinyl: genId(),
};

const run = async () => {
  await db.contactMessage.createMany({
    data: [
      {
        id: genId(),
        name: "John Doe",
        email: "john.doe@example.com",
        message: "Hello, I have a question about your product.",
        createdAt: new Date(),
      },
      {
        id: genId(),
        name: "Jane Smith",
        email: "jane.smith@example.com",
        message: "Hi, I would like to know more about your services.",
        createdAt: new Date(),
      },
    ],
  });

  await db.product.createMany({
    data: [
      {
        id: productIds.tshirt,
        title: "No Elevator T-Shirt",
        description: "A stylish t-shirt featuring the No Elevator logo.",
        price: 20.0,
        quantity: 100,
        imageUrl: "../assets/Images/no_elevator_gf_logo.svg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.hoodie,
        title: "No Elevator Hoodie",
        description: "A warm hoodie with the No Elevator logo.",
        price: 35.0,
        quantity: 50,
        imageUrl: "../../src/assets/Images/no_elevator_gf_logo.svg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.poster,
        title: "No Elevator Poster",
        description: "A poster with the No Elevator artwork.",
        price: 10.0,
        quantity: 200,
        imageUrl: "assets/Images/no_elevator_gf_logo.svg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.vinyl,
        title: "No Elevator Vinyl",
        description: "A vinyl record of No Elevator's latest album.",
        price: 25.0,
        quantity: 75,
        imageUrl: "Images/no_elevator_gf_logo.svg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more products here as needed
    ],
  });

  await db.cartItem.createMany({
    data: [
      {
        id: genId(),
        productId: productIds.tshirt,
        quantity: 2,
      },
      {
        id: genId(),
        productId: productIds.tshirt,
        quantity: 1,
      },
      // Add more cart items here as needed
    ],
  });
};

// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log("Data seed complete");
    process.exit();
  });
}
