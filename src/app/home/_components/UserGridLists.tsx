'use client'
import { useState } from 'react'
import { Photo } from '../page'
import { PhotoCard } from './PhotoCard'

interface UserGridListsProps { //agregué esta interfaz para decirle al componente que va recibir un array
  imagePhotos: Photo[]
}

export const UserGridLists = ({imagePhotos}:UserGridListsProps) => { // tengo en cuenta los UserGridListsProps declarados para obtener la propiedad requerida
  const [favorites, setFavorites] = useState<Photo[]>([imagePhotos[2],imagePhotos[3]]) // arreglo de prueba de favoritos agregué dos del que llegó por parametro

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'> 
     {/* clases de tailwind utilizadas para diseño responsivo */} 
      <div id="list">
      {
        imagePhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} /> //componente reutilizable de cards 
        ))
      }
      </div>

      <div id="favorites">
        <span>lista favoritos</span>
        {
          favorites.map(favorite => ( //iteración de nuevo arreglo para crar las cards
              <PhotoCard key={favorite.id} photo={favorite} /> // componente reutilizable de cards 
          ))
        }
      </div>
    </div>
  )
}
