import { Schema, model } from 'mongoose';

// 1. Create an interface representing a TS object.
export interface IArtist {
  name: string;
  phone: number;
  works: string[];
  age?: number;
  alias?: string;
  _id?: Schema.Types.ObjectId;
}

// 2. Create a Schema corresponding to the document in MongoDB.
const artistSchema = new Schema<IArtist>({
    name: { type: String, required: true},
    works: { type: [String], required: true},
    phone: { type: Number, required: true},
    age: Number,
    alias: String
});

// 3. Create a Model.
export const ArtistModel = model('Artist', artistSchema);