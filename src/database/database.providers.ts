/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'wallace',
        password: 'wallace',
        database: 'projects',
        entities: [__dirname + '/../modules/**/entities/*.entity.js'],
        synchronize: true,
      });
      console.log(__dirname + '/../modules/**/entities/*.entity.js')
      return dataSource.initialize();
    },
  },
];


