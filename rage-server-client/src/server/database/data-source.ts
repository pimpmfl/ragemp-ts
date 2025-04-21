import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER, POSTGRES_HOST } from './environment';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: POSTGRES_HOST === 'localhost',
  logging: true
});
