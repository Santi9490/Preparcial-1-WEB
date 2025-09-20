import { UserGridLists } from "./_components/UserGridLists";

export interface Photo {
  albumId:number;
  id:number;
  title: string;
  url:string;
  thumbnailUrl:string;
}


export default async function ServerGridPage() {
  
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos:Photo[] = await response.json(); // transformar request a json
     const imagePhotos: Photo[] = photos.map(photo => ({
        ...photo, url: 'https://picsum.photos/seed/picsum/200/300'  //usar map para crear un nuevo arreglo donde todos tienen la misma foto
      })).filter((item, index) => index <= 8)   //usar filter para borrar elementos desde el 9


  return (
    <div>
      <UserGridLists imagePhotos={imagePhotos}/> 
      {/* Crear componente para darle interacción al usuario (cliente) revisar folder _components */}
    </div>
  )
  
  
}