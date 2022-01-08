import { modelOptions, Severity } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';

export const defaultOptions = {
  options: {
    allowMixed: Severity.ALLOW,
  },
};

@modelOptions(defaultOptions)
export class ModelBase {
  _id?: ObjectId;

  get id(): ObjectId {
    return this._id;
  }
  set id(value: ObjectId) {
    this._id = value;
  }
}
