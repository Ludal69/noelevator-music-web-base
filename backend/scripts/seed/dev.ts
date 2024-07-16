import db, { genId } from "../../src/modules/db";
import bcrypt from "bcrypt";

const userId = genId();
const productIds = {
  tshirt: genId(),
  hoodie: genId(),
  poster: genId(),
  vinyl: genId(),
  cap: genId(),
  cd: genId(),
  key_ring: genId(),
  short: genId(),
  socks: genId(),
  shoes: genId(),
};
const orderId = genId();

const run = async () => {
  // Hash the password
  const hashedPassword = await bcrypt.hash("password123", 10);

  // Create a user with hashed password
  await db.user.create({
    data: {
      id: userId,
      email: "user@example.com",
      password: hashedPassword,
    },
  });

  // Create contact messages
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

  // Create products
  await db.product.createMany({
    data: [
      {
        id: productIds.tshirt,
        title: "No Elevator T-Shirt",
        description: "A stylish t-shirt featuring the No Elevator logo.",
        price: 20.0,
        quantity: 100,
        imageUrl: "t-shirt.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.hoodie,
        title: "No Elevator Hoodie",
        description: "A warm hoodie with the No Elevator logo.",
        price: 35.0,
        quantity: 50,
        imageUrl: "hoodie.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.poster,
        title: "No Elevator Poster",
        description: "A poster with the No Elevator artwork.",
        price: 10.0,
        quantity: 200,
        imageUrl: "poster.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.vinyl,
        title: "No Elevator Vinyl",
        description: "A vinyl record of No Elevator's latest album.",
        price: 25.0,
        quantity: 75,
        imageUrl: "vinyl.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.cap,
        title: "No Elevator Cap",
        description: "A beautiful cap.",
        price: 30.0,
        quantity: 75,
        imageUrl: "cap.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.cd,
        title: "No Elevator CD",
        description: "A beautiful CD.",
        price: 10.0,
        quantity: 75,
        imageUrl: "cd.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.key_ring,
        title: "No Elevator Key Ring",
        description: "A beautiful Key Ring.",
        price: 5.0,
        quantity: 75,
        imageUrl: "key_ring.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.short,
        title: "No Elevator Short",
        description: "A beautiful Short.",
        price: 20.0,
        quantity: 75,
        imageUrl: "short.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.socks,
        title: "No Elevator Socks",
        description: "Some beautiful Socks.",
        price: 10.0,
        quantity: 75,
        imageUrl: "socks.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: productIds.shoes,
        title: "No Elevator Shoes",
        description: "Some beautiful Shoes.",
        price: 50.0,
        quantity: 75,
        imageUrl: "shoes.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more products here as needed
    ],
  });

  // Create cart items
  await db.cartItem.createMany({
    data: [
      {
        id: genId(),
        productId: productIds.tshirt,
        userId: userId,
        quantity: 2,
        size: "M",
      },
      {
        id: genId(),
        productId: productIds.tshirt,
        userId: userId,
        quantity: 1,
        size: "L",
      },
      // Add more cart items here as needed
    ],
  });

  // Create an order
  await db.order.create({
    data: {
      id: orderId,
      userId: userId,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  // Create order items and associate with the order
  await db.orderItem.createMany({
    data: [
      {
        id: genId(),
        orderId: orderId,
        productId: productIds.tshirt,
        quantity: 1,
        size: "M",
      },
      {
        id: genId(),
        orderId: orderId,
        productId: productIds.hoodie,
        quantity: 1,
        size: "L",
      },
      // Add more order items here as needed
    ],
  });
};

// Auto-run if main script (not imported)
if (require.main === module) {
  run()
    .then(() => {
      console.log("Data seed complete");
      process.exit();
    })
    .catch((error) => {
      console.error("Data seed failed:", error);
      process.exit(1);
    });
}
