import db, { genId } from "../../src/modules/db";

const run = async () => {
  await db.merchProduct.createMany({
    data: [
      {
        id: genId(),
        name: "Product 1",
        price: 9.99,
      },
      {
        id: genId(),
        name: "Product 2",
        price: 14.99,
      },
    ],
  });

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
};

// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log("Data seed complete");
    process.exit();
  });
}
