import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/entity/user.repositoru';
import { ProductRepository } from './entity/product.repository';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository, ProductRepository])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
