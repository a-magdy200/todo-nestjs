import { DataSource } from 'typeorm';
import { Todo } from '../todos/entities/todo.entity';
import config from './config';

const c = config();
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: c.database.host,
  port: c.database.port,
  username: c.database.username,
  password: c.database.password,
  database: c.database.name,
  synchronize: true,
  logging: false,
  entities: [Todo],
});
