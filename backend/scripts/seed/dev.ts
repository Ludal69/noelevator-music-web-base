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
};

// Auto-run if main script (not imported)
if (require.main === module) {
  run().then(() => {
    console.log("Data seed complete");
    process.exit();
  });
}
