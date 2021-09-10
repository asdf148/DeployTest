import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenContext } from 'src/dto/tokenContext';
import { ProductRepository } from './entity/product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository) private productRepository: ProductRepository,
    ){}

    async create(user:TokenContext){

    }
}
