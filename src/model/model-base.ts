import { ObjectId } from 'mongoose';

export class ModelBase {
  _id?: ObjectId;

  get id(): ObjectId {
    return this._id;
  }
  set id(value: ObjectId) {
    this._id = value;
  }
}
