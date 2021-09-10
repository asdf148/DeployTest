import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ConvertToken } from 'src/CustomDecorator/tokenConvert';
import { ProductService } from './product.service';
import { TokenContext } from 'src/dto/tokenContext';
import { ProductRepository } from './entity/product.repository';
import { Product } from './entity/product.entity';

@Controller('product')
export class ProductController {
    constructor( private readonly productService: ProductService ){}

    @Post('/')
    async sale(@ConvertToken() user: TokenContext, @Res() res:Response){
        
    }
}
