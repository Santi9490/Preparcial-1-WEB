'use client';

import { useEffect, useState } from "react";
import { Author } from "../model/Author.interface";



export const AuthorsGrid = () => {

  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    
    getAuthors();
  
    /* return () => {
      LIMPIAR COMPONENTE, BORRAR ELEMENTOS EN MEMORIA
      ETC..
    } */
  }, [])
  
  const getAuthors = async() => {
    const response = await fetch('/api/authors');
    const authors = await response.json();
    setAuthors(authors);
  }

  return (
    <div>
      <h1>Authors</h1>
      <div className="grid grid-cols-3">
      {
        authors.map(author => (
          <div key={author.id } className={author.is_alive? 'bg-green-500' : 'bg-red-500'} >
            <h1>{author.first_name}- {author.last_name}</h1>
          </div>
        ))
      }
      </div>
    </div>
  )
}
