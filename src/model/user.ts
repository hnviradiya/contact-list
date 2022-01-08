import { getModelForClass, prop } from '@typegoose/typegoose';
import { ModelBase } from './model-base';

export class User extends ModelBase {
  @prop()
  public name?: string;

  @prop()
  public email?: string;

  @prop()
  public password?: string;
}

export const UserModel = getModelForClass(User);
