import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import * as bcrypt from 'bcrypt';
import { ERoles } from '../enums/role.enum';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String })
  desc: string;

  @Prop({ type: mongoose.Schema.Types.String })
  SKU: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  inventoryId: string;

  @Prop({ type: mongoose.Schema.Types.Number })
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Discount' })
  discountId: string;
}

export const ProductSchema =
  SchemaFactory.createForClass(Product).plugin(paginate);
