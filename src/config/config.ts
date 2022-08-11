import * as dotenv from 'dotenv';

dotenv.config();
export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT, 10) || 3306
      : 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    name: process.env.DATABASE_NAME,
  },
});
