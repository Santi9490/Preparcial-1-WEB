'use client'
import Image from "next/image"
import { Photo } from "../page"

interface PhotoCardProps {
  photo: Photo
}

export const PhotoCard = ({photo}: PhotoCardProps) => {




  return (
    <div>
      <h1>{photo.title}</h1>
      <Image 
        alt="Photo Card"
        src={photo.url}
        width={50}
        height={50}
      />
      <div>
        <button>❤</button>
        <button>🗑</button>
      </div>
    </div>
  )
}
