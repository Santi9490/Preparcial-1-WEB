'use client';
import { useEffect, useState } from 'react';
import { Author } from '../../../model/Author.interface';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface AuthorProps {
  id: string
}

const schema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.email(),
  country: z.string(),
  birth_year: z.number().min(4),
  is_alive: z.boolean()
})

type FormFields = z.infer<typeof schema>

export const AuthorChange = ({id}:AuthorProps) => {

  const router = useRouter();
  const [author, setAuthor] = useState<Author | null>(null);
  const [loading, setLoading] = useState(true);

  const { register, handleSubmit, reset, setError, formState:{ errors, isSubmitting } } = useForm<FormFields>(
    {defaultValues: { 
      first_name:'', 
      last_name:'', 
      email:'', 
      country:'', 
      birth_year:2000, 
      is_alive:true },
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch(`/api/authors/${id}`, { cache: 'no-store' });
        if (!r.ok) throw new Error();
        const data: Author = await r.json();
        setAuthor(data);
        reset(data);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, reset])
    
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const r = await fetch(`/api/authors/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error();
      router.push('/authors');
    } catch {
      setError('root', { message: 'Error actualizando autor' });
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (!author) return <p>No encontrado.</p>;   

  return (      
      <form className="w-2/3 p-5 flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} >
      <label> First Name </label>
      <input 
          {...register('first_name', {required: "Campo requerido"})}
          type="text"
          placeholder="First Name"
          className="border border-white p-2"
      />
      {errors.first_name && <span className="text-red-500">{errors.first_name.message}</span>}
      <label> Last Name </label>
      <input 
          {...register('last_name', {required: "Campo requerido"})}
          type="text"
          placeholder="Last Name"
          className="border border-white p-2"
      />
      {errors.last_name && <span className='text-red-500'>{errors.last_name.message}</span>}
      <label> Email </label>
      <input 
          {...register('email', {required: "Campo requerido"})}
          type="text"
          placeholder="Email"
          className="border border-white p-2"
          />
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
      <label> Country </label>
      <input 
          {...register('country', {required: "Campo requerido"})}
          type="text"
          placeholder="Country"
          className="border border-white p-2"
      />
      {errors.country && <span className='text-red-500'>{errors.country.message}</span>}
      <label>
        Birth Year
      </label>
      <input 
          {...register('birth_year', {required: "Campo requerido"})}
          type="number"
          placeholder="Birth Year"
          className="border border-white p-2"
      />
      {errors.birth_year && <span className='text-red-500'>{errors.birth_year.message}</span>}
      <label>
        Is Alive
      </label>
      <input 
          {...register('is_alive', {required: "Campo requerido"})}
          type="checkbox"
          className="border border-white p-2"
      />
      {errors.is_alive && <span className='text-red-500'>{errors.is_alive.message}</span>}
          

          <button disabled={isSubmitting} type="submit"> 
          {
            isSubmitting ? 'Cargando': 'Crear'
          }  
          </button>

          {errors.root && <span className='text-red-500'>{errors.root.message}</span>}          

    </form>
  )
}