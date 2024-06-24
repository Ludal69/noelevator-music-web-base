import app from "./server";
// import { dataSource } from "./config/data-source-config";
import db, { genId } from "./modules/db";

async function main() {
  try {
    // Test the database connection
    await db.$connect();
    console.log("Database connected successfully!");

    // Start the Express server
    app.listen(4000, () => {
      console.log(
        "Express server has started on port 4000. Open http://localhost:4000/api to see results"
      );
    });
  } catch (error) {
    console.error("Error during database initialization:", error);
    process.exit(1);
  }
}

main();
