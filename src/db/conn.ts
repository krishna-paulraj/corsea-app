import mongoose from "mongoose";

export async function conn() {
  try {
    await mongoose.connect(process.env.DATABASE_HOST as string);

    const conn = mongoose.connection;

    conn.on("connected", () => {
      console.log("Database Connected");
    });

    conn.on("error", (err) => {
      console.log("Database Connection have some errors ", err);
      process.exit();
    });
  } catch (error) {
    return console.log(error);
  }
}
