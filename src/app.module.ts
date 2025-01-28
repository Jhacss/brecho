import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_brecho',
      autoLoadEntities:true,
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
