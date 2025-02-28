import { Schema, model } from 'mongoose';

// 1. Create an interface representing a TS object.
export interface IGallery {
  name: string;
  city: string;
  artists: Schema.Types.ObjectId[];
  price?: number;
  _id?: Schema.Types.ObjectId;
}

// 2. Create a Schema corresponding to the document in MongoDB.
const gallerySchema = new Schema<IGallery>({
    name: { type: String, required: true},
    city: { type: String, required: true},
    artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }], //ref: 'Artist' relaciona gallery con el modelo de artista
    price: Number
});

// 3. Create a Model.
export const GalleryModel = model('Gallery', gallerySchema);