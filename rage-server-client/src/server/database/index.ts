import { AppDataSource } from './data-source';

export async function initDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected.');
  } catch (err) {
    console.error('Database connection failed: ', err);
    process.exit(1);
  }
}
