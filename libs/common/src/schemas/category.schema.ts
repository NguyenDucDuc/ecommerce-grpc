import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import * as bcrypt from 'bcrypt';
import { ERoles } from '../enums/role.enum';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @Prop({ type: mongoose.Schema.Types.String })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String })
  desc: string;
}

export const CategorySchema =
  SchemaFactory.createForClass(Category).plugin(paginate);
