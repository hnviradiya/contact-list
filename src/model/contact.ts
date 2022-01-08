import { prop, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { ModelBase } from './model-base';

export class Contact extends ModelBase {
  @prop()
  public name: string;

  @prop()
  public email: string;

  @prop()
  public phone: string;

  @prop()
  public userId: ObjectId;
}

export const ContactModel = getModelForClass(Contact);
