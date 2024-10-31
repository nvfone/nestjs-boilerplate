import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '@lib/share/database/base.schema';
@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  toJSON: {
    getters: true,
  },
})
export class UserModel extends BaseSchema {
  @Prop({
    required: true,
    index: true,
  })
  public uid: string;

  @Prop({
    required: true,
    index: true,
  })
  public email: string;

  @Prop({
    required: true,
    select: false,
  })
  public password: string;
}

export type UserDocument = UserModel & mongoose.Document;
const schema = SchemaFactory.createForClass(UserModel);

schema.pre('save', function (this: UserModel, next) {
  this.updated_at = Date.now();
  next();
});
schema.loadClass(UserModel);

export const UserSchema = schema;
