import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { CategoryRepository } from './entities/category.repository';
import { SubCategoryRepository } from './entities/subCategory.repository';
import { CategoryController } from './category.controller';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryRepository, SubCategoryRepository])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
