import mongoose from 'mongoose'; //npm install    comando para buscar las dependencias y instalarlas
import { UserModel, IUser } from './user.js';
import { ArtistModel, IArtist } from './artist.js';
import { GalleryModel, IGallery } from './gallery.js';
import { Schema, Types } from 'mongoose';

async function main() {
  mongoose.set('strictQuery', true); // Mantiene el comportamiento actual

  await mongoose.connect('mongodb://127.0.0.1:27017/seminario4')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar:', err));

  // const user1:  IUser = {
  //   "name": 'Bill',
  //   "email": 'bill@initech.com',
  //   "avatar": 'https://i.imgur.com/dM7Thhn.png'
  // };

  const artist1: IArtist = {
    "name": 'Paco',
    "works": ['MonoAzul','Rino','DragonNegro'],
    "phone": 999111222,
    "age": 20,
    "alias": 'PacoMerselo',
  };

  const artist5: IArtist = {
    "name": 'Dennis',
    "works": ['MonaLisa','Azul','RioNegro'],
    "phone": 12313321,
    "age": 20,
    "alias": 'Denn'
  };

  const artist6: IArtist = {
    "name": 'Marina',
    "works": ['aaa','123','pato'],
    "phone": 12314124,
    "age": 20,
  };

  const artist7: IArtist = {
    "name": 'Pau',
    "works": ['Papapa','lolo'],
    "phone": 1232143,
    "age": 21
  };



 
  //añadir un nuevo artista
  console.log("artista1",artist1);
  const newArtist = new ArtistModel(artist1);
  const artist2: IArtist = await newArtist.save();
  console.log("artist2",artist2);

  const newArtist2 = new ArtistModel(artist5);
  await newArtist2.save();
  const newArtist3 = new ArtistModel(artist6);
  await newArtist3.save();
  const newArtist4 = new ArtistModel(artist7);
  await newArtist4.save();

  const gallery1 : IGallery = {
    "name": 'GaleriaGo',
    "city": 'Barcelona',
    "artists": [newArtist._id, newArtist3._id],
    "price": 20
  }
  //crear una galeria.  Crud
  const newGallery = new GalleryModel(gallery1);
  await newGallery.save();
  console.log("newGallery",newGallery);


  // findById devuelve un objeto usando el _id.

  const artist3: IArtist | null = await ArtistModel.findById(artist2._id);
  console.log("artist3",artist3);
  


  // findOne devuelve un objeto usando un filtro.     cRud
  const artist4: IArtist | null = await ArtistModel.findOne({name: 'Dennis'}); //retorna el primer que trova
  console.log("artist4",artist4);  


  //findByIdAndUpdate 
  const updateArtist: IArtist | null = await ArtistModel.findByIdAndUpdate(
    artist2._id, 
    {"works": ['MonoAzul','Chocolate','DragonNegro'], 
     "alias": "Chocolatin"},
    {new: true});
 console.log('Artista actualizado:', updateArtist);


//findOneAndDelete devuelve un objeto usando un filtro y lo elimina.    cruD
  const borrarArtista: IArtist | null = await ArtistModel.findOneAndDelete({name: 'Dennis'});
  console.log("artistaBorrado",borrarArtista);



//Ejmeplo populate  : sustituye en la galeria con id=newGallery._id, las id de artistas por el numero y el nombre de estos
const galleryWithArtists = await GalleryModel.findById(newGallery._id).populate('artists', 'name phone'); //para que de cada artista veamos el name y phone
console.log("populate",galleryWithArtists);

//Ejemplo agreggate: .find() es adecuado para consultas simples y directas, .aggregate() te permite realizar operaciones más complejas, 
// como filtrado avanzado, agrupación, ordenación, transformación de datos, y más.

const artistAgregate: IArtist[] | null = await ArtistModel.aggregate([
  {$match : {age : 20}}, //busca los artistas que coincidan con age = 20
  { $limit: 2},  //limita a que solo hayan 2 resultados como maximo
  {$sort: { "phone": -1 }  }]); //ordena orden descendente por en campo "phone"
console.log("artistAgregate",artistAgregate);  


  // // Partial<IUser> Indica que el objeto puede tener solo algunos campos de IUser.
  // // select('name email') solo devuelve name y email.
  // // lean() devuelve un objeto plano de JS en lugar de un documento de Mongoose.
  // const user5: Partial<IUser> | null  = await UserModel.findOne({ name: 'Bill' })
  //   .select('name email').lean(); //solo selecciona el name y el email, pero no cumple la interfaz de usuari, por eso ponemos Partial<IUser>
  // console.log("user5",user5);



}

main()

//con  popullate para juntar resultados (ejemplo, sustityue un ebject ID por todo el JSON), es la unica forma de hacer relaciones
//
    
