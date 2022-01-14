import { Module } from '@nestjs/common';
import { Product, ProductSchema } from '@/products/schemas/product.schema';
import { ProductsService } from '@/products/services/products.service';
import { ProductsController } from '@/products/products.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
