'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod'
import { Author } from '../../model/Author.interface';

  const schema = z.object({
/*   first_name: z.string(),
  last_name: z.string(), */
  email: z.email(),
 /*  country: z.string(),
  birth_year: z.number().min(4),
  is_alive: z.boolean() */
})

type FormFields = z.infer<typeof schema>


export const AuthorForm = () => {

  const {register, handleSubmit,setError, formState: {errors, isSubmitting}} = useForm<FormFields>(
    {defaultValues: {
      email: 'test@test.com'
    },
    resolver: zodResolver(schema)
  }
  )

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log(data);
        /* const response = await fetch('/api/authors', {method: 'POST', body: ) */
        throw new Error();
        const favorits = [1,2,3]
        //eliminar 2
        const newFav = favorits.filter(favorito => favorito !== 2)

        localStorage.setItem('autores', JSON.stringify(newFav))
        localStorage.getItem('authors')
        JSON.parse('authors')
      } catch (error) {
        setError("root", {message: 'Email ya existe'})
      }
  }


  return (
    <div>
      <h1>Author Form</h1>
      <form className="w-2/3 p-5 flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} >
      <input 
          {...register('email', {required: "Campo requerido"})} 
          type="text"
          placeholder="Email"
          className="border border-white p-2"
          />

          {errors.email && <span className='text-red-500'>{errors.email.message}</span>} 
          

          <button disabled={isSubmitting} type="submit"> 
          {
            isSubmitting ? 'Cargando': 'Crear'
          }  
          </button>

          {errors.root && <span className='text-red-500'>{errors.root.message}</span>} 

    </form>


    </div>
  )
}
