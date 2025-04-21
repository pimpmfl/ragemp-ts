import { config } from 'dotenv';
import path from 'path';

config({ path: path.resolve('.env') });

export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_DB = process.env.POSTGRES_DB;
export const POSTGRES_PORT = process.env.POSTGRES_PORT;
export const POSTGRES_HOST = process.env.POSTGRES_HOST;
