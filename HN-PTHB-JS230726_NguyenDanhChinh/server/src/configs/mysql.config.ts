import mysql2, { PoolOptions } from "mysql2";

export const createConnection = () => {
  try {
    const connection = mysql2.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      database: "final-test-md4",
      password: "147258369aA",
    } as PoolOptions);
    if (connection) {
      console.log("Connection success");
    }
    return connection;
  } catch (error: unknown) {
    console.log("Connection failed");
    throw new Error(error as any);
  }
};
