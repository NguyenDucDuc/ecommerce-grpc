import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import * as bcrypt from 'bcrypt';
import { ERoles } from '../enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: mongoose.Schema.Types.String })
  username: string;

  @Prop({ type: mongoose.Schema.Types.String })
  password: number;

  @Prop({ type: mongoose.Schema.Types.String })
  firstName: string;

  @Prop({ type: mongoose.Schema.Types.String })
  lastName: string;

  @Prop({ type: mongoose.Schema.Types.String })
  phone: string;

  @Prop([{ type: mongoose.Schema.Types.String, default: [ERoles.CUSTOMER] }])
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User).plugin(paginate);
