import Image from "next/image";

export interface Photo {
  albumId:number;
  id:number;
  title: string;
  url:string;
  thumbnailUrl:string;
}


export default async function ServerGridPage() {

  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const photos:Photo[] = await response.json()
  const imagePhotos: Photo[] = photos.map(photo => ({
    ...photo, url: 'https://picsum.photos/seed/picsum/200/300'
  }))

  console.log(imagePhotos)

  return (
    <div>
      <h1>Photo Grid</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
      {
        imagePhotos.map((photo: Photo) => (
          <div id="photo" className="border border-white" key={photo.id}>
            <h1>{photo.title}</h1>
            <Image
             alt="imagen de prueba"
            src={photo.url}
            width={450}
            height={450}
            />

          </div>
        ))
      }

      </div>



    </div>
  );
}