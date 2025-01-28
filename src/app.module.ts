import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categoria/controllers/categoria.controller';
import { CategoriaModule } from './categoria/categoria.module';

 
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
    CategoriaModule
  ],
  controllers: [CategoriaController],
  providers: [],
})
export class AppModule {}
