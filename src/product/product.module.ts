import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/entity/user.repositoru';
import { CategoryRepository } from 'src/category/entities/category.repository';
import { SubCategoryRepository } from 'src/category/entities/subCategory.repository';
import { ProductRepository } from './entity/product.repository';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserRepository, ProductRepository, CategoryRepository, SubCategoryRepository])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
