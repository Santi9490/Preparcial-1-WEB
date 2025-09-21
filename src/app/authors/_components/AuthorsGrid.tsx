'use client';

import { useEffect, useState } from "react";
import { Author } from "../../model/Author.interface";
import Link from "next/link";



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

  const deleteAuthor = async (id: number) => {
    const res = await fetch(`/api/authors/${id}`, { method: 'DELETE' });
    if (res.ok) setAuthors(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div>
      <h1>Authors</h1>
      <div className="grid grid-cols-3">
      {
        authors.map(author => (
          <div key={author.id } className={author.is_alive? 'bg-green-500' : 'bg-red-500'} >
            <h1>{author.first_name}- {author.last_name}</h1> 
            <p>{author.email}</p>
            <p>{author.country}</p>
            <p>{author.birth_year}</p>
            <p>{author.is_alive? 'Vivo' : 'Muerto'}</p>
            <Link href={`/authors/${author.id}`} className="bg-blue-500 text-white p-2 inline-block text-center">Editar</Link>
            <button className="bg-red-700 text-white p-2" onClick={() => deleteAuthor(author.id)}>Eliminar</button>
          </div>
        ))
      }
      </div>
    </div>
  )
}
