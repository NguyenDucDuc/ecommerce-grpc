import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import * as bcrypt from 'bcrypt';
import { ERoles } from '../enums/role.enum';

export type DiscountDocument = HydratedDocument<Discount>;

@Schema({ timestamps: true })
export class Discount {
  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String })
  desc: string;

  @Prop({ type: mongoose.Schema.Types.Number })
  discountPercent: number;

  @Prop({ type: mongoose.Schema.Types.Boolean })
  isActive: boolean;
}

export const DiscountSchema =
  SchemaFactory.createForClass(Discount).plugin(paginate);
